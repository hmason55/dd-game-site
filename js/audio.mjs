function createAudioPool(src, size = 3) {
    const normalizedSize = Math.max(1, size);
    const pool = [];
    for (let i = 0; i < normalizedSize; i++) {
        const instance = new Audio(src);
        instance.preload = "auto";
        instance.load();
        pool.push(instance);
    }

    return {
        pool,
        nextIndex: 0,
        next() {
            const selected = this.pool[this.nextIndex];
            this.nextIndex = (this.nextIndex + 1) % this.pool.length;
            return selected;
        }
    };
}

function waitForAudioPreload(audio, timeoutMs = 5000) {
    return new Promise(resolve => {
        let settled = false;
        let timeoutId = null;

        const complete = result => {
            if (settled) {
                return;
            }

            settled = true;
            if (timeoutId !== null) {
                window.clearTimeout(timeoutId);
            }

            audio.removeEventListener("canplaythrough", onLoaded);
            audio.removeEventListener("loadeddata", onLoaded);
            audio.removeEventListener("error", onError);
            resolve(result);
        };

        const onLoaded = () => complete(true);
        const onError = () => complete(false);

        audio.addEventListener("canplaythrough", onLoaded, { once: true });
        audio.addEventListener("loadeddata", onLoaded, { once: true });
        audio.addEventListener("error", onError, { once: true });

        timeoutId = window.setTimeout(() => complete(false), timeoutMs);
        audio.load();
    });
}

const presentationCueSounds = Object.freeze({
    Focus: ["UI Select Click 01", "UI Select Click 02", "UI Select Click 03", "UI Select Click 04", "UI Select Click 05"],
    Select: ["UI Select Click 01", "UI Select Click 02", "UI Select Click 03", "UI Select Click 04", "UI Select Click 05"],
    Confirm: ["UI Select Click 01", "UI Select Click 02", "UI Select Click 03", "UI Select Click 04", "UI Select Click 05"],
    Reject: ["click"],
    Purchase: ["loot"],
    Reward: ["loot"],
    Travel: ["UI Page Flipping 01", "UI Page Flipping 02"],
    Rest: ["UI Page Flipping 01", "UI Page Flipping 02"],
    Hit: ["Dirt Land", "Dirt Chain Land"],
    Block: ["Sword Blocked 1", "Sword Blocked 2"],
    Status: ["typewriter"],
    Transition: ["UI Page Flipping 01", "UI Page Flipping 02"]
});

function presentationCueIntensity(configuredIntensity) {
    const motionMultiplier = typeof window !== "undefined"
        && typeof window.matchMedia === "function"
        && window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 0.5
        : 1;

    return configuredIntensity * motionMultiplier;
}

export const audioPlayer = {
    sounds: {},
    tracks: {},
    trackDefinitions: {},
    pendingTrackLoads: new Map(),
    pendingLayerTransitions: {
        music: null,
        ambient: null
    },
    layerState: {
        music: { current: null, revision: 0, transition: Promise.resolve() },
        ambient: { current: null, revision: 0, transition: Promise.resolve() }
    },
    mix: {
        master: 0.75,
        sfx: 1,
        music: 1,
        ambient: 1
    },
    pitchVariance: 0.06,
    presentationCueIntensity: 1,

    async loadSound(name, src, volume = 0.5) {
        try {
            const probe = new Audio(src);
            probe.preload = "auto";
            const didLoad = await waitForAudioPreload(probe);
            if (!didLoad) {
                console.error("Failed to load sound:", name, src);
                return false;
            }

            const pool = createAudioPool(src, 3);
            pool.pool[0] = probe;
            this.sounds[name] = { src, pool, baseVolume: volume, intensities: new WeakMap() };
            this.applySfxVolume(name);

            for (const audio of pool.pool) {
                audio.onerror = () => {
                    console.error("Failed to load sound:", name, src);
                    delete this.sounds[name];
                };
            }

            return true;
        } catch (e) {
            console.error("Failed to load sound:", name, src, e);
            return false;
        }
    },

    registerTrack(name, src, layer, volume, loop) {
        this.trackDefinitions[name] = { src, layer, volume, loop };
        if (this.pendingLayerTransitions[layer]?.trackName === name) {
            this.requestTrack(name);
        }
        return true;
    },

    requestTrack(name) {
        if (this.pendingTrackLoads.has(name)) {
            return;
        }

        const { src, layer, volume, loop } = this.trackDefinitions[name];
        const load = this.loadTrack(name, src, layer, volume, loop).finally(() => {
            this.pendingTrackLoads.delete(name);
        });
        this.pendingTrackLoads.set(name, load);
    },

    async loadTrack(name, src, layer, volume = 0.5, loop = true) {
        try {
            const audio = new Audio(src);
            audio.preload = "auto";
            audio.loop = false;
            const didLoad = await waitForAudioPreload(audio);
            if (!didLoad) {
                console.error("Failed to load track:", name, src);
                return false;
            }

            this.tracks[name] = { audio, baseVolume: volume, layer, loop, shouldLoop: false, fadeGain: 0 };
            audio.addEventListener("ended", () => {
                this.handleTrackEnded(name);
            });
            this.applyTrackVolume(name);
            audio.onerror = () => {
                console.error("Failed to load track:", name, src);
                delete this.tracks[name];
            };

            await this.tryProcessPendingLayerTransition(layer, name);
            return true;
        } catch (e) {
            console.error("Failed to load track:", name, src, e);
            return false;
        }
    },

    playSound(name, intensity = 1) {
        const sound = this.sounds[name];
        if (!sound) {
            console.warn("Sound not found:", name);
            return;
        }

        const audio = sound.pool.next();
        audio.pause();
        audio.currentTime = 0;
        sound.intensities.set(audio, this.clamp(intensity));
        audio.volume = this.getSfxVolume(sound, audio);
        const variance = (Math.random() * 2 - 1) * this.pitchVariance;
        audio.playbackRate = 1 + variance;
        audio.play().catch(err => console.error("Audio playback failed:", err));
    },

    playRandom(names, intensity = 1) {
        if (!names || names.length === 0) {
            return;
        }
        const index = Math.floor(Math.random() * names.length);
        this.playSound(names[index], intensity);
    },

    playPresentationCue(cue) {
        const names = presentationCueSounds[cue];
        if (!names) {
            return;
        }

        this.playRandom(names, presentationCueIntensity(this.presentationCueIntensity));
    },

    setPresentationCueIntensity(intensity) {
        this.presentationCueIntensity = this.clamp(intensity);
    },

    unlockAudio() {
        const unlock = new Audio();
        unlock.play().catch(() => { });
    },

    setVolume(volume) {
        this.setMixVolumes(volume, this.mix.sfx, this.mix.music, this.mix.ambient);
    },

    setMixVolumes(master, sfx, music, ambient) {
        this.mix.master = this.clamp(master);
        this.mix.sfx = this.clamp(sfx);
        this.mix.music = this.clamp(music);
        this.mix.ambient = this.clamp(ambient);

        for (const name of Object.keys(this.sounds)) {
            this.applySfxVolume(name);
        }

        for (const name of Object.keys(this.tracks)) {
            this.applyTrackVolume(name);
        }
    },

    async transitionToLayerTrack(layer, trackName, randomStart = false, fadeMs = 900) {
        const state = this.layerState[layer];
        if (!state) {
            return;
        }

        const revision = ++state.revision;
        this.pendingLayerTransitions[layer] = null;

        const next = this.tracks[trackName];
        if (trackName && (!next || next.layer !== layer)) {
            this.pendingLayerTransitions[layer] = { trackName, randomStart, fadeMs };
            if (this.trackDefinitions[trackName]?.layer === layer) {
                this.requestTrack(trackName);
            }
            return;
        }

        const transition = state.transition.then(async () => {
            if (revision !== state.revision || state.current === trackName) return;
            if (state.current) {
                await this.fadeOutTrack(state.current, fadeMs);
                state.current = null;
            }
            if (trackName && revision === state.revision) {
                const didStart = await this.fadeInTrack(trackName, randomStart, fadeMs);
                state.current = didStart ? trackName : null;
            }
        });
        state.transition = transition.catch(() => {});
        await transition;
    },

    async fadeOutTrack(trackName, fadeMs) {
        const track = this.tracks[trackName];
        if (!track) {
            return;
        }

        track.shouldLoop = false;
        const { audio } = track;
        await this.fadeTrack(track, 0, fadeMs);
        audio.pause();
        audio.currentTime = 0;
    },

    async fadeInTrack(trackName, randomStart, fadeMs) {
        const track = this.tracks[trackName];
        if (!track) {
            return false;
        }

        track.shouldLoop = track.loop;
        const { audio } = track;
        if (randomStart) {
            this.setRandomStart(audio);
        }

        track.fadeGain = 0;
        audio.volume = this.getTrackVolume(track);
        try {
            await audio.play();
        } catch (err) {
            console.error("Audio playback failed:", err);
            return false;
        }

        await this.fadeTrack(track, 1, fadeMs);
        return true;
    },

    async handleTrackEnded(trackName) {
        const track = this.tracks[trackName];
        if (!track || !track.loop || !track.shouldLoop) {
            return;
        }

        const { audio } = track;
        audio.currentTime = 0;
        try {
            await audio.play();
        } catch (err) {
            console.error("Audio playback failed:", err);
        }
    },

    tryProcessPendingLayerTransition(layer, loadedTrackName) {
        const pending = this.pendingLayerTransitions[layer];
        if (!pending || pending.trackName !== loadedTrackName) {
            return;
        }

        this.pendingLayerTransitions[layer] = null;
        return this.transitionToLayerTrack(layer, pending.trackName, pending.randomStart, pending.fadeMs);
    },

    setRandomStart(audio) {
        if (Number.isFinite(audio.duration) && audio.duration > 0) {
            audio.currentTime = Math.random() * audio.duration;
            return;
        }

        audio.addEventListener("loadedmetadata", () => {
            if (Number.isFinite(audio.duration) && audio.duration > 0) {
                audio.currentTime = Math.random() * audio.duration;
            }
        }, { once: true });
    },

    fadeTrack(track, to, durationMs) {
        const duration = Math.max(1, durationMs || 1);
        const stepMs = 40;
        const steps = Math.max(1, Math.round(duration / stepMs));
        const from = track.fadeGain;

        return new Promise(resolve => {
            let count = 0;
            const timer = setInterval(() => {
                count += 1;
                track.fadeGain = from + (to - from) * (count / steps);
                track.audio.volume = this.getTrackVolume(track);
                if (count >= steps) {
                    clearInterval(timer);
                    resolve();
                }
            }, stepMs);
        });
    },

    applySfxVolume(name) {
        const sound = this.sounds[name];
        if (!sound) {
            return;
        }

        for (const audio of sound.pool.pool) {
            audio.volume = this.getSfxVolume(sound, audio);
        }
    },

    getSfxVolume(sound, audio) {
        return sound.baseVolume * this.mix.master * this.mix.sfx * (sound.intensities.get(audio) ?? 1);
    },

    applyTrackVolume(name) {
        const track = this.tracks[name];
        if (!track) {
            return;
        }

        track.audio.volume = this.getTrackVolume(track);
    },

    getTrackVolume(track) {
        const layerVolume = track.layer === "music" ? this.mix.music : this.mix.ambient;
        return track.baseVolume * this.mix.master * layerVolume * track.fadeGain;
    },

    clamp(value) {
        return Math.min(1, Math.max(0, value ?? 0));
    }
};

document.addEventListener("pointerdown", () => {
    audioPlayer.unlockAudio();
}, { once: true });

const uiClickSounds = [
    "UI Select Click 01",
    "UI Select Click 02",
    "UI Select Click 03",
    "UI Select Click 04",
    "UI Select Click 05"
];

document.addEventListener("click", e => {
    if (e.target.closest("button")) {
        audioPlayer.playRandom(uiClickSounds);
    }
});
