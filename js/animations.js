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
window.revealAndAnimateCloneAtPos = (wrapper, mouseX, mouseY, scale = 0.3, speed = 1.0) => {
    if (!wrapper || typeof mouseX !== 'number' || typeof mouseY !== 'number') return;

    const offsetX = parseFloat(wrapper.dataset.offsetX || '0');
    const offsetY = parseFloat(wrapper.dataset.offsetY || '0');

    const left = mouseX - offsetX;
    const top = mouseY - offsetY;

    wrapper.style.left = `${left}px`;
    wrapper.style.top = `${top}px`;

    const appearMs = 400 / speed;
    const removeMs = 500 / speed;

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
            }, removeMs);
        }, appearMs);
    });
};

// Shake an element to indicate damage taken
window.shakeElement = (id, intensity) => {
    const el = document.getElementById(id);
    if (!el) return;

    const dist = 2 + 8 * Math.min(Math.max(intensity, 0), 1);
    const keyframes = [
        { transform: 'translate(0,0)' },
        { transform: `translate(${dist}px, 0)` },
        { transform: `translate(${-dist}px, 0)` },
        { transform: `translate(${dist}px, 0)` },
        { transform: 'translate(0,0)' }
    ];

    el.animate(keyframes, { duration: 200, easing: 'ease' });
};

// Flash an element white and black when hit
window.flashElement = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const keyframes = [
        { filter: 'brightness(2)' },
        { filter: 'brightness(0)' },
        { filter: 'brightness(2)' },
        { filter: 'none' }
    ];

    el.animate(keyframes, { duration: 200, easing: 'steps(1, end)' });
};

// GSAP animations
window.gsapTextEffects = window.gsapTextEffects || {};

window.gsapTextEffects.richEffect = function (id, effect, speed, repeat) {
    const el = document.getElementById(id);
    if (!el) return;
    speed = speed || 1.0;
    repeat = (typeof repeat === "undefined" || repeat < 0) ? -1 : repeat;

    if (effect === "shake") {
        const maxDist = 0.5 * speed;
        const maxRot = 1 * speed;
        let cycles = 0;
        let maxCycles = repeat === -1 ? 99999 : repeat * 2; // *2 for yoyo
        function doShake() {
            if (cycles++ > maxCycles) {
                gsap.to(el, { x: 0, y: 0, rotate: 0, duration: 0.08 });
                return;
            }
            gsap.to(el, {
                x: (Math.random() - 0.5) * 2 * maxDist,
                y: (Math.random() - 0.5) * 2 * maxDist,
                rotate: (Math.random() - 0.5) * 2 * maxRot,
                duration: 0.09 / speed,
                ease: "sine.inOut",
                yoyo: true,
                onComplete: doShake
            });
        }
        doShake();
    } else if (effect === "wave") {
        gsap.to(el, {
            y: -6 * speed,
            duration: 0.8 / speed,
            repeat: repeat,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
    // ... color can be handled by inline style in C#
};


