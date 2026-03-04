export function copyToClipboard(text) {
    if (!navigator.clipboard || typeof navigator.clipboard.writeText !== 'function') {
        console.warn('Copy to clipboard is not supported in this browser.');
        return;
    }

    navigator.clipboard.writeText(text).catch(err => console.error('Copy failed', err));
}

export async function pasteFromClipboard() {
    if (!navigator.clipboard?.readText) {
        console.warn('Clipboard API unavailable; paste ignored.');
        return '';
    }

    try {
        if (!navigator.clipboard || typeof navigator.clipboard.readText !== 'function') {
            console.warn('Paste from clipboard is not supported in this browser.');
            return '';
        }

        return await navigator.clipboard.readText();
    } catch (err) {
        console.warn('Paste failed', err);
        return '';
    }
}

export function getUserAgent() {
    if (typeof navigator === 'undefined') {
        return null;
    }

    return navigator.userAgent || null;
}

export function supportsErrorReporting() {
    if (typeof fetch !== 'function') {
        return false;
    }

    if (typeof navigator === 'undefined') {
        return false;
    }

    return true;
}

export function hideErrorUi() {
    const el = document.getElementById('blazor-error-ui');
    if (el) {
        el.style.display = 'none';
    }
}

export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'auto' });
}

export function toggleFullscreen() {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;

    if (!fullscreenElement) {
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
    return !!(document.fullscreenElement || document.webkitFullscreenElement);
}

let fullscreenHandler = null;
let hotkeyHandler = null;

export function observeFullscreenChange(dotNetRef) {
    fullscreenHandler = () => dotNetRef.invokeMethodAsync('OnFullscreenChange');
    document.addEventListener('fullscreenchange', fullscreenHandler);
    document.addEventListener('webkitfullscreenchange', fullscreenHandler);
}

export function unobserveFullscreenChange() {
    if (fullscreenHandler) {
        document.removeEventListener('fullscreenchange', fullscreenHandler);
        document.removeEventListener('webkitfullscreenchange', fullscreenHandler);
        fullscreenHandler = null;
    }
}

export function registerHotkeys(dotNetRef) {
    hotkeyHandler = (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

        if (e.repeat) {
            return;
        }

        if (e.code === 'Escape') {
            dotNetRef.invokeMethodAsync('OnHotkey', 'Escape');
        } else if (e.code === 'Tab') {
            e.preventDefault();
            dotNetRef.invokeMethodAsync('OnHotkey', 'Tab');
        } else if (e.code === 'KeyE') {
            dotNetRef.invokeMethodAsync('OnHotkey', 'KeyE');
        } else if (e.code === 'F11') {
            e.preventDefault();
            dotNetRef.invokeMethodAsync('OnHotkey', 'F11');
        }
    };
    document.addEventListener('keydown', hotkeyHandler);
}

export function unregisterHotkeys() {
    if (hotkeyHandler) {
        document.removeEventListener('keydown', hotkeyHandler);
        hotkeyHandler = null;
    }
}
