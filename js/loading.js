document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        "Building deck",
        "Creating dungeon",
        "Spawning monsters"
    ];

    let loadingMessage = document.getElementById("loading-message");

    if (!loadingMessage) {
        return;
    }

    function getRandomMessage() {
        return messages[Math.floor(Math.random() * messages.length)];
    }

    loadingMessage.innerText = getRandomMessage() + "...";

    let intervalId = setInterval(() => {
        if (document.getElementById("loading-container")) {
            loadingMessage.innerText = getRandomMessage();
        } else {
            clearInterval(intervalId);
        }
    }, 1500);

    window.stopLoadingMessages = function () {
        clearInterval(intervalId);
        document.getElementById("loading-container")?.remove();
    };
});