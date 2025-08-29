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

export function observeResize(element, dotNetRef) {
    const resizeObserver = new ResizeObserver(() => {
        dotNetRef.invokeMethodAsync('OnResize');
    });
    resizeObserver.observe(element);
    resizeObservers.set(dotNetRef, resizeObserver);
}

export function unobserveResize(dotNetRef) {
    const observer = resizeObservers.get(dotNetRef);
    if (observer) {
        observer.disconnect();
        resizeObservers.delete(dotNetRef);
    }
}

export function observeZoomChange(dotNetRef) {
    let query = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);

    const handleChange = () => {
        dotNetRef.invokeMethodAsync('OnZoomChanged');
        query.removeEventListener('change', handleChange);
        query = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
        query.addEventListener('change', handleChange);
    };

    query.addEventListener('change', handleChange);
    zoomListeners.set(dotNetRef, { query, handleChange });
}

export function unobserveZoomChange(dotNetRef) {
    const data = zoomListeners.get(dotNetRef);
    if (data) {
        const { query, handleChange } = data;
        query.removeEventListener('change', handleChange);
        zoomListeners.delete(dotNetRef);
    }
}
