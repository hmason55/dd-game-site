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

const resizeObservers = new Map();
const zoomListeners = new Map();

export function observeResize(element, dotNetRef, id) {
    const resizeObserver = new ResizeObserver(() => {
        dotNetRef.invokeMethodAsync('OnResize');
    });
    resizeObserver.observe(element);
    resizeObservers.set(id, resizeObserver);
}

export function unobserveResize(id) {
    const observer = resizeObservers.get(id);
    if (observer) {
        observer.disconnect();
        resizeObservers.delete(id);
    }
}

export function observeZoomChange(dotNetRef, id) {
    let query = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);

    const handleChange = () => {
        dotNetRef.invokeMethodAsync('OnZoomChanged');
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
