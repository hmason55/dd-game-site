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