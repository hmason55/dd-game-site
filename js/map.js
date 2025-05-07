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

window.observeResize = (element, dotnetHelper) => {
    if (!element) return;

    const resizeObserver = new ResizeObserver(() => {
        dotnetHelper.invokeMethodAsync('OnResize');
    });
    resizeObserver.observe(element);
};

window.observeZoomChange = (dotnetHelper) => {
    let query = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);

    const handleChange = () => {
        // Re-register the listener with the new devicePixelRatio
        query.removeEventListener('change', handleChange);
        dotnetHelper.invokeMethodAsync('OnZoomChanged');

        // Listen again with updated DPI
        query = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
        query.addEventListener('change', handleChange);
    };

    query.addEventListener('change', handleChange);
};