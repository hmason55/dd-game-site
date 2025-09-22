export function initLoadingMessages() {
    const messages = [
        "Building deck",
        "Creating dungeon",
        "Spawning monsters"
    ];

    const loadingMessage = document.getElementById("loading-message");
    let intervalId = null;

    function getRandomMessage() {
        return messages[Math.floor(Math.random() * messages.length)];
    }

    function setMessage() {
        if (!loadingMessage) {
            return;
        }

        loadingMessage.innerText = `${getRandomMessage()}...`;
    }

    window.stopLoadingMessages = function () {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }

        document.getElementById("loading-container")?.remove();
    };

    if (!loadingMessage) {
        return;
    }

    setMessage();

    intervalId = setInterval(() => {
        if (document.getElementById("loading-container")) {
            setMessage();
        } else {
            window.stopLoadingMessages();
        }
    }, 1500);
}
