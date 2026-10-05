export function initLoadingMessages() {
    const messages = [
        "Opening the way",
        "Listening beyond the veil",
        "Gathering echoes"
    ];

    const loadingMessage = document.getElementById("loading-message");
    let intervalId = null;

    let messageIndex = 0;

    function setMessage() {
        if (!loadingMessage) {
            return;
        }

        loadingMessage.textContent = `${messages[messageIndex % messages.length]}…`;
        messageIndex++;
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
    }, 3200);
}
