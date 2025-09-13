export const audioPlayer = {
    sounds: {},
    volume: 0.75,
    pitchVariance: 0.15,

    async loadSound(name, src, volume = 0.5) {
        try {
            const response = await fetch(src, { method: 'HEAD' });
            if (!response.ok) {
                console.error("Failed to load sound:", name, src);
                return false;
            }

            const audio = new Audio(src);
            audio.preload = "auto";
            this.sounds[name] = { audio, baseVolume: volume };
            audio.volume = volume * this.volume;

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

    playSound(name) {
        const sound = this.sounds[name];
        if (sound) {
            const audio = sound.audio;
            audio.pause();
            audio.currentTime = 0;
            audio.volume = sound.baseVolume * this.volume;
            const variance = (Math.random() * 2 - 1) * this.pitchVariance;
            audio.playbackRate = 1 + variance;
            audio.play().catch(err => console.error("Audio playback failed:", err));
        } else {
            console.warn("Sound not found:", name);
        }
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
        unlock.play().catch(() => {});
    },

    setVolume(volume) {
        this.volume = volume;
        for (const key in this.sounds) {
            const sound = this.sounds[key];
            if (sound) {
                sound.audio.volume = sound.baseVolume * volume;
            }
        }
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

document.addEventListener("click", (e) => {
    if (e.target.closest("button")) {
        audioPlayer.playRandom(uiClickSounds);
    }
});
