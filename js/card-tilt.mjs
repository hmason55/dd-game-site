const CARD_SELECTOR = '.card-wrapper .card';
const MAX_TILT_DEGREES = 14;
const observerConfig = { childList: true, subtree: true };

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function updateCardTilt(card, rotateX, rotateY) {
    card.style.setProperty('--card-rotate-x', `${rotateX}deg`);
    card.style.setProperty('--card-rotate-y', `${rotateY}deg`);
}

function attachTiltHandlers(card) {
    if (card.dataset.tiltInitialized === 'true') {
        return;
    }

    card.dataset.tiltInitialized = 'true';

    let frameHandle = null;
    let pendingRotation = null;

    const scheduleUpdate = () => {
        if (frameHandle !== null || pendingRotation === null) {
            return;
        }

        frameHandle = window.requestAnimationFrame(() => {
            frameHandle = null;
            const { rotateX, rotateY } = pendingRotation;
            pendingRotation = null;
            updateCardTilt(card, rotateX, rotateY);
        });
    };

    const handlePointerMove = (event) => {
        const rect = card.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        const percentX = clamp((offsetX / rect.width) * 2 - 1, -1, 1);
        const percentY = clamp((offsetY / rect.height) * 2 - 1, -1, 1);

        const rotateY = percentX * MAX_TILT_DEGREES;
        const rotateX = -percentY * MAX_TILT_DEGREES;

        pendingRotation = { rotateX, rotateY };
        scheduleUpdate();
    };

    const handlePointerLeave = () => {
        pendingRotation = { rotateX: 0, rotateY: 0 };
        scheduleUpdate();
    };

    card.addEventListener('pointermove', handlePointerMove, { passive: true });
    card.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    card.addEventListener('pointerup', handlePointerLeave, { passive: true });
    card.addEventListener('pointercancel', handlePointerLeave, { passive: true });
}

function initializeExistingCards(root = document) {
    const cards = root.querySelectorAll(CARD_SELECTOR);
    for (const card of cards) {
        attachTiltHandlers(card);
    }
}

function observeCardInsertions() {
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node instanceof HTMLElement) {
                    if (node.matches?.(CARD_SELECTOR)) {
                        attachTiltHandlers(node);
                    }

                    initializeExistingCards(node);
                }
            }
        }
    });

    observer.observe(document.body, observerConfig);
}

export function initCardTilt() {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
    }

    initializeExistingCards();
    observeCardInsertions();
}
