export const audioPlayer = {
    sounds: {},
    volume: 0.75,
    pitchVariance: 0.05,

    loadSound(name, src) {
        const audio = new Audio(src);
        audio.preload = "auto";
        this.sounds[name] = audio;
        audio.volume = this.volume;

        audio.onerror = () => console.error("Failed to load sound:", name, src);
    },

    playSound(name) {
        const audio = this.sounds[name];
        if (audio) {
            audio.currentTime = 0;
            audio.volume = this.volume;
            const variance = (Math.random() * 2 - 1) * this.pitchVariance;
            audio.playbackRate = 1 + variance;
            audio.play().catch(err => console.error("Audio playback failed:", err));
        } else {
            console.warn("Sound not found:", name);
        }
    },

    unlockAudio() {
        const unlock = new Audio();
        unlock.play().catch(() => {});
    },

    setVolume(volume) {
        this.volume = volume;
        for (const key in this.sounds) {
            if (this.sounds[key]) {
                this.sounds[key].volume = volume;
            }
        }
    }
};

document.addEventListener("click", () => {
    audioPlayer.unlockAudio();
}, { once: true });
