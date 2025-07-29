export const audioPlayer = {
    sounds: {},
    volume: 0.75,
    pitchVariance: 0.10,

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
            audio.volume = this.volume * 0.5;
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
            if (this.sounds[key]) {
                this.sounds[key].volume = volume;
            }
        }
    }
};

document.addEventListener("click", () => {
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
