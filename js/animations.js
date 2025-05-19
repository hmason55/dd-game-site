// Track the mouse globally
window._latestMousePos = { x: 0, y: 0 };

window.addEventListener('mousemove', e => {
    window._latestMousePos = {
        x: e.clientX,
        y: e.clientY
    };
}, { passive: true });

// Safe fallback access
window.getCurrentMousePos = () => {
    return {
        x: typeof window._latestMousePos?.x === 'number' ? window._latestMousePos.x : 0,
        y: typeof window._latestMousePos?.y === 'number' ? window._latestMousePos.y : 0
    };
};

// Clone an element but keep it hidden
window.cloneElementHidden = (element) => {
    if (!element) return null;

    const mouse = window._latestMousePos || { x: 0, y: 0 };
    const rect = element.getBoundingClientRect();

    // Compute offset from mouse to top-left of scaled rect
    const offsetX = mouse.x - rect.left;
    const offsetY = mouse.y - rect.top + 104; // this offset aligns the center perfectly when dropped.

    const clone = element.cloneNode(true);

    // Copy the original scale transform only
    clone.style.transform = 'scale(1.5)';
    const computedStyle = getComputedStyle(element);
    const originalTransform = computedStyle.transform;

    if (originalTransform && originalTransform !== 'none') {
        clone.style.transform = originalTransform;
        clone.style.transformOrigin = originalOrigin;
    }

    const wrapper = document.createElement("div");
    wrapper.style.position = 'fixed';
    wrapper.style.top = `${rect.top}px`;
    wrapper.style.left = `${rect.left}px`;
    wrapper.style.width = `${rect.width}px`;
    wrapper.style.height = `${rect.height}px`;
    wrapper.style.zIndex = 9999;
    wrapper.style.pointerEvents = 'none';
    wrapper.style.transition = 'transform 0.5s ease';
    wrapper.style.opacity = '0';
    wrapper.style.transform = 'none';

    wrapper.classList.add("hand");

    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);

    // Save offset directly on the wrapper for later use
    wrapper.dataset.offsetX = offsetX.toString();
    wrapper.dataset.offsetY = offsetY.toString();

    return wrapper;
};

// Reveal and animate clone from given mouse position
window.revealAndAnimateCloneAtPos = (wrapper, mouseX, mouseY, scale = 0.3) => {
    if (!wrapper || typeof mouseX !== 'number' || typeof mouseY !== 'number') return;

    const offsetX = parseFloat(wrapper.dataset.offsetX || '0');
    const offsetY = parseFloat(wrapper.dataset.offsetY || '0');

    const left = mouseX - offsetX;
    const top = mouseY - offsetY;

    wrapper.style.left = `${left}px`;
    wrapper.style.top = `${top}px`;

    requestAnimationFrame(() => {
        wrapper.style.opacity = '1';

        setTimeout(() => {
            const finalRect = wrapper.getBoundingClientRect();
            const targetX = 0 - finalRect.left + finalRect.width + 20;
            const targetY = window.innerHeight - finalRect.top - finalRect.height - 20;

            wrapper.style.transform = `translate(${targetX}px, ${targetY}px) scale(${scale})`;
            wrapper.style.opacity = '0.7';

            setTimeout(() => {
                wrapper.remove();
            }, 500);
        }, 400);
    });
};

