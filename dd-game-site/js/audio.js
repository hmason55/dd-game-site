window.audioPlayer = {
    sounds: {},
    volume: 0.75, // Default full volume

    loadSound: function (name, src) {
        let audio = new Audio(src);
        audio.preload = "auto";
        this.sounds[name] = audio;
        audio.volume = this.volume; // Apply initial volume

        // Log load success or failure
        audio.oncanplaythrough = function () {
            console.log("Sound loaded:", name);
        };
        audio.onerror = function () {
            console.error("Failed to load sound:", name, src);
        };
    },

    playSound: function (name) {
        if (this.sounds[name]) {
            let audio = this.sounds[name];
            audio.currentTime = 0; // Restart sound from beginning
            audio.volume = this.volume; // Apply volume when playing

            // Attempt to play the sound
            audio.play().catch(error => {
                console.error("Audio playback failed:", error);
            });
        } else {
            console.warn("Sound not found:", name);
        }
    },

    unlockAudio: function () {
        // Required for some browsers to allow audio playback
        let unlock = new Audio();
        unlock.play().catch(() => { });
        console.log("Audio unlocked");
    },

    setVolume: function (volume) {
        this.volume = volume;
        for (let key in this.sounds) {
            if (this.sounds[key]) {
                this.sounds[key].volume = volume;
            }
        }
    }
};

// Unlock audio on user interaction (required for autoplay policies)
document.addEventListener("click", () => {
    window.audioPlayer.unlockAudio();
}, { once: true }); // Runs only once
