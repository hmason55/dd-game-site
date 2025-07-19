export function copyToClipboard(text) {
    navigator.clipboard.writeText(text).catch(err => console.error('Copy failed', err));
}

export async function pasteFromClipboard() {
    try {
        return await navigator.clipboard.readText();
    } catch (err) {
        console.error('Paste failed', err);
        return '';
    }
}

export function hideErrorUi() {
    const el = document.getElementById('blazor-error-ui');
    if (el) {
        el.style.display = 'none';
    }
}

export function toggleFullscreen() {
    if (!document.fullscreenElement) {
        const el = document.documentElement;
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

export function isFullscreen() {
    return !!document.fullscreenElement;
}

export function observeFullscreenChange(dotNetRef) {
    const handler = () => dotNetRef.invokeMethodAsync('OnFullscreenChange');
    document.addEventListener('fullscreenchange', handler);
    document.addEventListener('webkitfullscreenchange', handler);
}
