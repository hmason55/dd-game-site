/**
 * Shows a short-lived DOM effect for rooms that do not mount the Pixi encounter surface.
 * This deliberately avoids retaining emitter state or allocating a canvas.
 */
export function showNonEncounterEffect(options) {
    const anchor = options.elementId ? document.getElementById(options.elementId) : null;
    const bounds = anchor?.getBoundingClientRect();
    const effect = document.createElement('div');
    const isText = options.renderMode === 'Text' || options.renderMode === 1;
    effect.textContent = isText ? (options.text || '') : '✦';
    effect.setAttribute('aria-hidden', 'true');
    effect.style.position = 'fixed';
    effect.style.left = `${bounds ? bounds.left + bounds.width / 2 : window.innerWidth / 2}px`;
    effect.style.top = `${bounds ? bounds.top + bounds.height / 2 : window.innerHeight / 2}px`;
    effect.style.pointerEvents = 'none';
    effect.style.zIndex = '1100';
    effect.style.color = isText ? '#75df8a' : '#c5f5d0';
    effect.style.font = isText ? (options.font || '700 1.25rem system-ui') : '700 2rem system-ui';
    effect.style.textShadow = '0 1px 3px #102018';
    effect.style.transform = 'translate(-50%, -50%) scale(0.65)';
    effect.style.opacity = '0';
    effect.style.transition = 'transform 550ms ease-out, opacity 550ms ease-out';
    document.body.appendChild(effect);
    requestAnimationFrame(() => {
        effect.style.opacity = '1';
        effect.style.transform = 'translate(-50%, -125%) scale(1)';
    });
    window.setTimeout(() => {
        effect.style.opacity = '0';
        effect.style.transform = 'translate(-50%, -180%) scale(0.85)';
    }, 380);
    window.setTimeout(() => effect.remove(), 950);
}

