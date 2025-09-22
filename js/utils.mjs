export async function copyToClipboard(text) {
    if (navigator.clipboard?.writeText) {
        try {
            await navigator.clipboard.writeText(text);
            return;
        } catch (err) {
            console.warn('Clipboard writeText failed, falling back to execCommand.', err);
        }
    }

    if (typeof document.execCommand !== 'function' || !document.body) {
        console.warn('Clipboard API unavailable and no fallback supported.');
        return;
    }

    const textarea = document.createElement('textarea');
    try {
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        textarea.style.pointerEvents = 'none';
        textarea.setAttribute('readonly', '');
        document.body.appendChild(textarea);
        if (typeof textarea.focus === 'function') {
            textarea.focus({ preventScroll: true });
        }
        textarea.select();
        if (typeof textarea.setSelectionRange === 'function') {
            textarea.setSelectionRange(0, textarea.value.length);
        }
        const successful = document.execCommand('copy');
        if (!successful) {
            console.warn('Fallback execCommand copy returned false.');
        }
    } catch (err) {
        console.warn('Fallback copy failed.', err);
    } finally {
        if (textarea.parentElement) {
            textarea.parentElement.removeChild(textarea);
        }
    }
}

export async function pasteFromClipboard() {
    if (!navigator.clipboard?.readText) {
        console.warn('Clipboard API unavailable; paste ignored.');
        return '';
    }

    try {
        return await navigator.clipboard.readText();
    } catch (err) {
        console.warn('Paste failed', err);
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
