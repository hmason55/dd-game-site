export function getBoundingClientRect(element) {
    if (!element) return null;
    const rect = element.getBoundingClientRect();
    return {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height
    };
}

export function getRelativeBoundingClientRect(element, parent) {
    if (!element || !parent) return null;
    const rect = element.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    return {
        left: rect.left - parentRect.left,
        top: rect.top - parentRect.top,
        width: rect.width,
        height: rect.height
    };
}

export function getRelativeMapRoomRect(locationElement, parent) {
    if (!locationElement || !parent) return null;

    const roomElement = locationElement.querySelector('.map-room') ?? locationElement;
    const rect = roomElement.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    return {
        left: rect.left - parentRect.left,
        top: rect.top - parentRect.top,
        width: rect.width,
        height: rect.height
    };
}

const resizeObservers = new Map();
const zoomListeners = new Map();
const windowResizeListeners = new Map();

function invokeDotNetNoThrow(dotNetRef, methodName) {
    dotNetRef.invokeMethodAsync(methodName).catch(() => {
        // Ignore callbacks after component disposal.
    });
}

export function observeResize(element, dotNetRef, id) {
    unobserveResize(id);

    const onWindowResize = () => {
        invokeDotNetNoThrow(dotNetRef, 'OnResize');
    };
    window.addEventListener('resize', onWindowResize);
    windowResizeListeners.set(id, onWindowResize);

    if (typeof ResizeObserver === 'undefined') {
        console.warn('ResizeObserver is not supported in this browser; using window resize events only.', { id });
        requestAnimationFrame(onWindowResize);
        return;
    }

    const resizeObserver = new ResizeObserver(() => {
        invokeDotNetNoThrow(dotNetRef, 'OnResize');
    });
    resizeObserver.observe(element);
    resizeObservers.set(id, resizeObserver);
    requestAnimationFrame(onWindowResize);
}

export function unobserveResize(id) {
    const observer = resizeObservers.get(id);
    if (observer) {
        observer.disconnect();
        resizeObservers.delete(id);
    }

    const onWindowResize = windowResizeListeners.get(id);
    if (onWindowResize) {
        window.removeEventListener('resize', onWindowResize);
        windowResizeListeners.delete(id);
    }
}

export function observeZoomChange(dotNetRef, id) {
    if (typeof window.matchMedia !== 'function') {
        console.warn('matchMedia is not supported in this browser; zoom change detection will be disabled.', { id });
        return;
    }

    let query = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);

    const handleChange = () => {
        invokeDotNetNoThrow(dotNetRef, 'OnZoomChanged');
        query.removeEventListener('change', handleChange);
        query = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
        query.addEventListener('change', handleChange);
    };

    query.addEventListener('change', handleChange);
    zoomListeners.set(id, { query, handleChange });
}

export function unobserveZoomChange(id) {
    const data = zoomListeners.get(id);
    if (data) {
        const { query, handleChange } = data;
        query.removeEventListener('change', handleChange);
        zoomListeners.delete(id);
    }
}

export function centerElementVertically(element) {
    if (!element) return;

    element.scrollIntoView({
        block: 'center',
        inline: 'nearest',
        behavior: 'auto'
    });
}
