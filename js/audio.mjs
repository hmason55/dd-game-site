export const audioPlayer = {
    sounds: {},
    tracks: {},
    pendingLayerTransitions: {
        music: null,
        ambient: null
    },
    layerState: {
        music: { current: null },
        ambient: { current: null }
    },
    mix: {
        master: 0.75,
        sfx: 1,
        music: 1,
        ambient: 1
    },
    pitchVariance: 0.15,

    async loadSound(name, src, volume = 0.5) {
        try {
            const response = await fetch(src, { method: "HEAD" });
            if (!response.ok) {
                console.error("Failed to load sound:", name, src);
                return false;
            }

            const audio = new Audio(src);
            audio.preload = "auto";
            this.sounds[name] = { audio, baseVolume: volume };
            this.applySfxVolume(name);

            audio.onerror = () => {
                console.error("Failed to load sound:", name, src);
                delete this.sounds[name];
            };

            return true;
        } catch (e) {
            console.error("Failed to load sound:", name, src, e);
            return false;
        }
    },

    async loadTrack(name, src, layer, volume = 0.5, loop = true) {
        try {
            const response = await fetch(src, { method: "HEAD" });
            if (!response.ok) {
                console.error("Failed to load track:", name, src);
                return false;
            }

            const audio = new Audio(src);
            audio.preload = "auto";
            audio.loop = false;
            this.tracks[name] = { audio, baseVolume: volume, layer, loop, shouldLoop: false };
            audio.addEventListener("ended", () => {
                this.handleTrackEnded(name);
            });
            this.applyTrackVolume(name);
            this.tryProcessPendingLayerTransition(layer, name);

            audio.onerror = () => {
                console.error("Failed to load track:", name, src);
                delete this.tracks[name];
            };

            return true;
        } catch (e) {
            console.error("Failed to load track:", name, src, e);
            return false;
        }
    },

    playSound(name) {
        const sound = this.sounds[name];
        if (!sound) {
            console.warn("Sound not found:", name);
            return;
        }

        const audio = sound.audio;
        audio.pause();
        audio.currentTime = 0;
        this.applySfxVolume(name);
        const variance = (Math.random() * 2 - 1) * this.pitchVariance;
        audio.playbackRate = 1 + variance;
        audio.play().catch(err => console.error("Audio playback failed:", err));
    },

    playRandom(names) {
        if (!names || names.length === 0) {
            return;
        }
        const index = Math.floor(Math.random() * names.length);
        this.playSound(names[index]);
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

        const currentName = state.current;
        if (!trackName) {
            if (currentName) {
                await this.fadeOutTrack(currentName, fadeMs);
                state.current = null;
            }
            return;
        }

        const next = this.tracks[trackName];
        if (!next || next.layer !== layer) {
            this.pendingLayerTransitions[layer] = { trackName, randomStart, fadeMs };
            console.warn("Track not yet loaded for layer, queuing transition:", layer, trackName);
            return;
        }

        this.pendingLayerTransitions[layer] = null;

        if (currentName === trackName) {
            return;
        }

        if (currentName) {
            await this.fadeOutTrack(currentName, fadeMs);
        }

        const didStart = await this.fadeInTrack(trackName, randomStart, fadeMs);
        state.current = didStart ? trackName : null;
    },

    async fadeOutTrack(trackName, fadeMs) {
        const track = this.tracks[trackName];
        if (!track) {
            return;
        }

        track.shouldLoop = false;
        const { audio } = track;
        await this.fadeAudio(audio, audio.volume, 0, fadeMs);
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

        const targetVolume = this.getTrackTargetVolume(track);
        audio.volume = 0;
        try {
            await audio.play();
        } catch (err) {
            console.error("Audio playback failed:", err);
            return false;
        }

        await this.fadeAudio(audio, 0, targetVolume, fadeMs);
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
        this.transitionToLayerTrack(layer, pending.trackName, pending.randomStart, pending.fadeMs);
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

    fadeAudio(audio, from, to, durationMs) {
        const duration = Math.max(1, durationMs || 1);
        const stepMs = 40;
        const steps = Math.max(1, Math.round(duration / stepMs));
        const delta = (to - from) / steps;

        return new Promise(resolve => {
            let current = from;
            let count = 0;
            const timer = setInterval(() => {
                count += 1;
                current += delta;
                audio.volume = count >= steps ? to : current;
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
        sound.audio.volume = sound.baseVolume * this.mix.master * this.mix.sfx;
    },

    applyTrackVolume(name) {
        const track = this.tracks[name];
        if (!track) {
            return;
        }

        const target = this.getTrackTargetVolume(track);
        if (!track.audio.paused) {
            track.audio.volume = target;
        }
    },

    getTrackTargetVolume(track) {
        const layerVolume = track.layer === "music" ? this.mix.music : this.mix.ambient;
        return track.baseVolume * this.mix.master * layerVolume;
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
