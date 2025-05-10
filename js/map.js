window.getBoundingClientRect = (element) => {
    if (!element) return null;
    const rect = element.getBoundingClientRect();
    return {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height
    };
};

window.getRelativeBoundingClientRect = (element, parent) => {
    if (!element || !parent) return null;

    const rect = element.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    return {
        left: rect.left - parentRect.left,
        top: rect.top - parentRect.top,
        width: rect.width,
        height: rect.height
    };
};

window.observeResize = (element, dotNetRef) => {
    const resizeObserver = new ResizeObserver(() => {
        dotNetRef.invokeMethodAsync('OnResize');
    });
    resizeObserver.observe(element);
};


window.observeZoomChange = (dotNetRef) => {
    let query = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);

    const handleChange = () => {
        dotNetRef.invokeMethodAsync('OnZoomChanged');

        // Re-register at the new resolution
        query.removeEventListener('change', handleChange);
        query = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
        query.addEventListener('change', handleChange);
    };

    query.addEventListener('change', handleChange);
};