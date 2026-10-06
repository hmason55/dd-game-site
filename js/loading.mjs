/** Registers the startup screen cleanup hook. */
export function initLoadingMessages() {
    window.stopLoadingMessages = function () {
        document.getElementById("loading-container")?.remove();
    };
}
