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

    const computedStyle = getComputedStyle(element);
    const originalTransform = computedStyle.transform;
    const originalOrigin = computedStyle.transformOrigin;

    if (originalTransform && originalTransform !== 'none') {
        clone.style.transform = originalTransform;
    }
    if (originalOrigin && originalOrigin !== 'none') {
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
    if (originalOrigin && originalOrigin !== 'none') {
        wrapper.style.transformOrigin = originalOrigin;
    }

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

// Return the top-left coordinates of an element
window.getElementPosition = (element) => {
    if (!element) return { x: 0, y: 0 };
    const rect = element.getBoundingClientRect();
    return { x: rect.left, y: rect.top };
};

// Wait until an element exists and has layout
window.waitForElement = (id) => {
    return new Promise(resolve => {
        const check = () => {
            const el = document.getElementById(id);
            if (el && el.offsetWidth > 0 && el.offsetHeight > 0) {
                resolve();
            } else {
                requestAnimationFrame(check);
            }
        };
        check();
    });
};

function _parseOriginPart(part, size) {
    part = part.trim();
    if (part.endsWith('%')) return parseFloat(part) / 100 * size;
    if (part === 'left' || part === 'top') return 0;
    if (part === 'center') return size / 2;
    if (part === 'right' || part === 'bottom') return size;
    const val = parseFloat(part);
    return isNaN(val) ? size / 2 : val;
}

function _getOrigin(el, rect, override) {
    let originStr = override;
    if (!originStr && el) {
        originStr = getComputedStyle(el).transformOrigin;
    }
    originStr = originStr || '50% 50%';
    const parts = originStr.split(' ');
    const ox = _parseOriginPart(parts[0], rect.width);
    const oy = _parseOriginPart(parts[1] || '50%', rect.height);
    return { x: ox, y: oy };
}

// Show or hide an element by id
window.setVisibility = (id, visible) => {
    const el = document.getElementById(id);
    if (!el) return;
    const visibility = visible ? 'visible' : 'hidden';
    const opacity = visible ? '1' : '0';
    el.style.visibility = visibility;
    el.style.opacity = opacity;
    el.querySelectorAll('.mud-badge, .mud-badge-root, .mud-badge-wrapper').forEach(b => {
        b.style.visibility = visibility;
        b.style.opacity = opacity;
    });
};

// Clone an element and animate it to the bottom right corner
window.cloneAndAnimateToCorner = (element, scale = 0.3, speed = 1.0) => {
    const wrapper = window.cloneElementHidden(element);
    const pos = window.getCurrentMousePos();
    window.revealAndAnimateCloneAtPos(wrapper, pos.x, pos.y, scale, speed);
};

// Clone an element and animate it towards a target element
window.cloneAndAnimateToElement = (source, target, scale = 0.3, speed = 1.0, targetAnchor) => {
    if (!source || !target) return;
    const wrapper = window.cloneElementHidden(source);
    if (!wrapper) return;


    const appearMs = 400 / speed;
    const removeMs = 500 / speed;

    requestAnimationFrame(() => {
        wrapper.style.opacity = '1';

        setTimeout(() => {

            const startRect = wrapper.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();

            const startOrigin = _getOrigin(wrapper, startRect);
            const targetOrigin = _getOrigin(target, targetRect, targetAnchor);

            const tx = (targetRect.left + targetOrigin.x) - (startRect.left + startOrigin.x);
            const ty = (targetRect.top + targetOrigin.y) - (startRect.top + startOrigin.y);

            wrapper.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
            wrapper.style.opacity = '0.7';

            setTimeout(() => {
                wrapper.remove();
            }, removeMs);
        }, appearMs);
    });
};

// Clone an element specified by id and animate it towards another element id
window.cloneAndAnimateIdToId = (sourceId, targetId, scale = 0.3, speed = 1.0, targetAnchor) => {
    const source = document.getElementById(sourceId);
    const target = document.getElementById(targetId);
    if (!source || !target) return;
    window.cloneAndAnimateToElement(source, target, scale, speed, targetAnchor);
};

// Clone an element by id, start the clone at the position of another element, then animate to the target element
window.cloneAndAnimateIdFromIdToId = (sourceId, startId, targetId, scale = 0.3, speed = 1.0, startAnchor, targetAnchor) => {
    const source = document.getElementById(sourceId);
    const start = document.getElementById(startId);
    const target = document.getElementById(targetId);
    if (!source || !start || !target) return;

    const wrapper = window.cloneElementHidden(source);
    if (!wrapper) return;

    const startRect = start.getBoundingClientRect();
    const wRectInit = wrapper.getBoundingClientRect();
    const originInit = _getOrigin(wrapper, wRectInit);
    const startAnchorPt = startAnchor ? _getOrigin(null, startRect, startAnchor) : { x: startRect.width / 2, y: startRect.height / 2 };
    wrapper.style.top = `${startRect.top + startAnchorPt.y - originInit.y}px`;
    wrapper.style.left = `${startRect.left + startAnchorPt.x - originInit.x}px`;

    const appearMs = 400 / speed;
    const removeMs = 500 / speed;


    requestAnimationFrame(() => {
        wrapper.style.opacity = '1';

        setTimeout(() => {
            const wRect = wrapper.getBoundingClientRect();
            const tRect = target.getBoundingClientRect();

            const startOrigin = _getOrigin(wrapper, wRect);
            const targetOrigin = _getOrigin(target, tRect, targetAnchor);

            const tx = (tRect.left + targetOrigin.x) - (wRect.left + startOrigin.x);
            const ty = (tRect.top + targetOrigin.y) - (wRect.top + startOrigin.y);

            wrapper.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
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

    el.animate(keyframes, {
        duration: 200,
        easing: 'ease',
        composite: 'add'
    });
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

// Slightly push the target away from the attacker
// Speed controls how quickly the animation completes
window.nudgeFrom = (attackerId, targetId, speed = 1.0, distance = 20, duration = 150) => {
    const attacker = document.getElementById(attackerId);
    const target = document.getElementById(targetId);
    if (!attacker || !target) return;

    const ar = attacker.getBoundingClientRect();
    const tr = target.getBoundingClientRect();
    const dx = tr.left + tr.width / 2 - (ar.left + ar.width / 2);
    const dy = tr.top + tr.height / 2 - (ar.top + ar.height / 2);
    const mag = Math.hypot(dx, dy) || 1;
    const ux = dx / mag;
    const uy = dy / mag;

    const tx = ux * distance;
    const ty = uy * distance;

    target.animate([
        { transform: 'translate(0,0)' },
        { transform: `translate(${tx}px, ${ty}px)` },
        { transform: 'translate(0,0)' }
    ], {
        duration: duration / speed,
        easing: 'ease-out',
        composite: 'add'
    });
};

// Briefly move the attacker towards the target
// Returns a promise that resolves when the animation completes
window.lungeTowards = (attackerId, targetId, speed = 1.0, distance = 15, duration = 150) => {
    const attacker = document.getElementById(attackerId);
    const target = document.getElementById(targetId);
    if (!attacker || !target) return Promise.resolve();

    const ar = attacker.getBoundingClientRect();
    const tr = target.getBoundingClientRect();
    const dx = tr.left + tr.width / 2 - (ar.left + ar.width / 2);
    const dy = tr.top + tr.height / 2 - (ar.top + ar.height / 2);
    const mag = Math.hypot(dx, dy) || 1;
    const ux = dx / mag;
    const uy = dy / mag;

    const tx = ux * distance;
    const ty = uy * distance;

    const anim = attacker.animate([
        { transform: 'translate(0,0)' },
        { transform: `translate(${tx}px, ${ty}px)` },
        { transform: 'translate(0,0)' }
    ], {
        duration: duration / speed,
        easing: 'ease-in-out',
        composite: 'add'
    });
    return anim.finished;
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

// Simple appear animations for the typewriter component
window.animateTypewriterAppear = function (id, animation) {
    const el = document.getElementById(id);
    if (!el) return;

    switch (animation) {
        case 'FadeIn':
            el.style.transition = 'opacity 0.3s ease-in';
            requestAnimationFrame(() => { el.style.opacity = '1'; });
            break;
        case 'Pop':
            el.style.transition = 'opacity 0.3s ease-in, transform 0.3s ease-out';
            requestAnimationFrame(() => {
                el.style.opacity = '1';
                el.style.transform = 'scale(1)';
            });
            break;
        case 'Scale':
            el.style.transition = 'transform 0.3s ease-out';
            requestAnimationFrame(() => { el.style.transform = 'scale(1)'; });
            break;
        case 'SlideUp':
            el.style.transition = 'opacity 0.3s ease-in, transform 0.3s ease-out';
            requestAnimationFrame(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
            break;
    }
};


