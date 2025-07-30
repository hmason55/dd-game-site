const textOffsetMap = new Map();

function getNextTextOffset(id) {
    const key = id || 'global';
    const value = textOffsetMap.get(key) || 0;
    textOffsetMap.set(key, value + 1);
    setTimeout(() => {
        const current = textOffsetMap.get(key) || 1;
        textOffsetMap.set(key, Math.max(0, current - 1));
    }, 600);
    return value;
}

export const particleSystem = {
    createParticleEmitter: function (options) {
        const canvas = setupCanvas(options);
        const ctx = canvas.getContext("2d");
        const dpr = window.devicePixelRatio || 1;
        if (dpr !== 1) {
            ctx.scale(dpr, dpr);
        }
        const renderWidth = canvas.width / dpr;
        const renderHeight = canvas.height / dpr;
        let particles = [];
        let particlePool = [];
        let emitting = true;

        function getParticle() {
            return particlePool.pop() || {};
        }

        function recycleParticle(p) {
            p.tintedImage = null;
            particlePool.push(p);
        }

        /**
        * Returns a random value or vector between the given range.
        * @param {{min: number|{x: number, y: number}, max: number|{x: number, y: number}}} range - The value or vector range.
        * @returns {number|{x: number, y: number}} - Random scalar or vector in range.
        */
        function randomRange(range) {
            if (typeof range.min === "number" && typeof range.max === "number") {
                return Math.random() * (range.max - range.min) + range.min;
            } else if (typeof range.min.x === "number" && typeof range.max.x === "number") {
                return {
                    x: Math.random() * (range.max.x - range.min.x) + range.min.x,
                    y: Math.random() * (range.max.y - range.min.y) + range.min.y
                };
            }
            console.error("randomRange received an unsupported type:", range);
            return 0;
        }

        /**
        * Generates a random RGBA color within the given color range.
        * @param {{min: object, max: object}} colorRange - The min/max range for each channel.
        * @returns {{r: number, g: number, b: number, a: number}} - Random color object.
        */
        function randomColor(colorRange) {
            return {
                r: randomRange({ min: colorRange.min.r, max: colorRange.max.r }) * 255,
                g: randomRange({ min: colorRange.min.g, max: colorRange.max.g }) * 255,
                b: randomRange({ min: colorRange.min.b, max: colorRange.max.b }) * 255,
                a: randomRange({ min: colorRange.min.a, max: colorRange.max.a })
            };
        }

        /**
         * Returns a tinted version of the base image using source-atop compositing.
         * @param {HTMLImageElement} baseImage - The image to tint.
         * @param {number} r - Red value (0-255).
         * @param {number} g - Green value (0-255).
         * @param {number} b - Blue value (0-255).
         * @param {number} a - Alpha value (0-1).
         * @param {number} size - Width and height of the output canvas.
         * @returns {HTMLCanvasElement} - A canvas with the tinted image.
         */
        function tintImage(baseImage, r, g, b, a, size) {
            const off = document.createElement("canvas");
            off.width = size;
            off.height = size;
            const octx = off.getContext("2d");

            octx.drawImage(baseImage, 0, 0, size, size);

            // TODO: Handle nullable colors
            if (r == 255 && g == 255 && b == 255 && a == 1)
            {
                return off;
            }

            octx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
            octx.globalCompositeOperation = "source-atop";
            octx.fillRect(0, 0, size, size);
            octx.globalCompositeOperation = "source-over";

            return off;
        }

        /**
        * Creates and returns a new particle with randomized properties based on emitter settings.
        * @returns {object} - A new particle instance.
        */
       function createParticle() {
           const p = getParticle();
           const color = randomColor(options.particleColor);
            const endColor = options.endParticleColor ? randomColor(options.endParticleColor) : color;
            const radius = randomRange(options.size);
            const centerX = renderWidth / 2;
            const centerY = renderHeight / 2;
            const rotationRad = (options.emitterRotation || 0) * Math.PI / 180;

            let { x: spawnX, y: spawnY } = calculateSpawnPosition(
                options.shape,
                options.areaSize,
                centerX,
                centerY,
                rotationRad,
                options.arcDirection,
                options.arcAngle
            );

            const arcCenterRad = options.arcDirection * (Math.PI / 180);
            const arcHalfRad = (options.arcAngle / 2) * (Math.PI / 180);
            const randomAngle = arcCenterRad + (Math.random() * arcHalfRad * 2 - arcHalfRad);

            let tintedImage = null;
            if (options.renderMode?.toLowerCase() === "image" && options._loadedImage) {
                tintedImage = tintImage(options._loadedImage, color.r, color.g, color.b, color.a, radius * 2);
            }
            Object.assign(p, {
                x: spawnX,
                y: spawnY,
                radius,
                r: color.r, g: color.g, b: color.b, a: color.a,
                endR: endColor.r, endG: endColor.g, endB: endColor.b, endA: endColor.a,
                speed: randomRange(options.speed),
                directionX: Math.cos(randomAngle),
                directionY: Math.sin(randomAngle),
                friction: randomRange(options.friction),
                lifespan: randomRange(options.lifespan),
                startTime: performance.now(),
                externalVelocityX: randomRange(options.externalVelocity).x,
                externalVelocityY: randomRange(options.externalVelocity).y,
                externalAccelerationX: randomRange(options.externalAcceleration).x,
                externalAccelerationY: randomRange(options.externalAcceleration).y,
                tintedImage,
                rotation: randomRange(options.rotation || { min: 0, max: 0 }),
                rotationSpeed: randomRange(options.rotationSpeed || { min: 0, max: 0 })
            });
            return p;
        }

        /**
        * Emits a batch of particles based on emitter settings and schedules the next emit if looping.
        */
        function emitParticles() {
            if (!emitting) return;
            const count = Math.floor(randomRange(options.particleCount));
            for (let i = 0; i < count; i++) particles.push(createParticle());
            if (options.loop) setTimeout(emitParticles, options.emitRate);
        }

        /**
        * Updates particle positions, applies physics, fades them out, and handles their rendering.
        * Continues animation if particles remain or loop is enabled.
        */
        function updateParticles() {
            const now = performance.now();
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                if ((now - p.startTime) >= p.lifespan) {
                    particles[i] = particles[particles.length - 1];
                    particles.pop();
                    recycleParticle(p);
                    continue;
                }

                p.rotation += p.rotationSpeed;
                p.externalVelocityX += p.externalAccelerationX;
                p.externalVelocityY += p.externalAccelerationY;
                p.x += (p.directionX * p.speed) + p.externalVelocityX;
                p.y += (p.directionY * p.speed) + p.externalVelocityY;
                p.speed *= p.friction;

                const lifeProgress = Math.min((now - p.startTime) / p.lifespan, 1);
                const fade = Math.pow(1 - lifeProgress, 2.5);
                const alpha = options.endAlpha != null
                    ? fade * (1 - options.endAlpha) + options.endAlpha
                    : fade; // default behavior if endAlpha not passed

                const r = p.r + (p.endR - p.r) * lifeProgress;
                const g = p.g + (p.endG - p.g) * lifeProgress;
                const b = p.b + (p.endB - p.b) * lifeProgress;
                const a = p.a + (p.endA - p.a) * lifeProgress;
                renderParticle(ctx, options, { ...p, r, g, b, a }, alpha);
            }

            if (particles.length > 0 || options.loop) requestAnimationFrame(updateParticles);
            else destroy(canvas.id);
        }

        if (options.renderMode?.toLowerCase() === "image" && options.imageSrc) {
            const img = new Image();
            img.onload = () => { options._loadedImage = img; emitParticles(); updateParticles(); };
            img.onerror = () => { emitParticles(); updateParticles(); };
            img.src = options.imageSrc;
        } else {
            emitParticles();
            updateParticles();
        }

        /**
        * Removes the canvas associated with the given ID and notifies .NET to untrack the emitter.
        * @param {string} id - The ID of the canvas/emitter to remove.
        */
        function destroy(id) {
            document.getElementById(id)?.remove();
            DotNet.invokeMethodAsync("DDGame", "UntrackParticleEmitter", id);
        }
    },

    destroyParticleEmitter: function (id) {
        document.getElementById(id)?.remove();
        DotNet.invokeMethodAsync("DDGame", "UntrackParticleEmitter", id);
    }
};

/**
 * Initializes and appends a fixed-position canvas to the document.
 * @param {object} options - The emitter configuration options.
 * @returns {HTMLCanvasElement} - The created canvas element.
 */
function setupCanvas(options) {
    let position = {
        x: options.position.x + options.offset.x,
        y: options.position.y + options.offset.y
    };
    if (options.elementId) {
        const element = document.getElementById(options.elementId);
        if (element) {
            const rect = element.getBoundingClientRect();
            position.x = rect.left + rect.width / 2 + options.offset.x;
            position.y = rect.top + rect.height / 2 + options.offset.y;
        }
    }
    if ((options.renderMode || "").toLowerCase() === "text") {
        const step = getNextTextOffset(options.elementId);
        position.y -= step * 30;
    }
    const canvas = document.createElement("canvas");
    canvas.id = options.id;
    const dpr = window.devicePixelRatio || 1;
    const size = 2048;
    const half = size / 2;
    Object.assign(canvas.style, {
        position: "fixed",
        left: `${position.x - half}px`,
        top: `${position.y - half}px`,
        pointerEvents: "none",
        zIndex: options.zIndex
    });
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    document.body.appendChild(canvas);
    return canvas;
}

/**
 * Calculates a spawn position for a particle based on emitter shape and rotation.
 * @param {string} shape - The shape of the emitter ('point', 'box', or 'arc').
 * @param {object} areaSize - Dimensions of the emitter area.
 * @param {number} centerX - X center of the emitter.
 * @param {number} centerY - Y center of the emitter.
 * @param {number} rotationRad - Rotation in radians applied to spawn area.
 * @returns {{x: number, y: number}} - The computed spawn position.
 */
function calculateSpawnPosition(shape, areaSize, centerX, centerY, rotationRad, arcDirection, arcAngle) {
    switch ((shape || "point").toLowerCase()) {
        case "box": {
            const width = areaSize?.x || 100;
            const height = areaSize?.y || 100;
            const localX = Math.random() * width - width / 2;
            const localY = Math.random() * height - height / 2;
            return rotatePoint(localX, localY, centerX, centerY, rotationRad);
        }
        case "arc": {
            const radius = (areaSize?.x || 100) / 2;
            const arcCenterRad = arcDirection * Math.PI / 180;
            const arcHalfRad = (arcAngle / 2) * Math.PI / 180;
            const angle = arcCenterRad + (Math.random() * arcHalfRad * 2 - arcHalfRad);
            const dist = Math.random() * radius;
            const localX = Math.cos(angle) * dist;
            const localY = Math.sin(angle) * dist;
            return rotatePoint(localX, localY, centerX, centerY, rotationRad);
        }
        case "point":
        default:
            return { x: centerX, y: centerY };
    }
}

/**
 * Rotates a local (x, y) coordinate around a center point by a given angle.
 * @param {number} x - The local x coordinate.
 * @param {number} y - The local y coordinate.
 * @param {number} centerX - The x coordinate of the center point.
 * @param {number} centerY - The y coordinate of the center point.
 * @param {number} angle - The angle of rotation in radians.
 * @returns {{x: number, y: number}} - The rotated position.
 */
function rotatePoint(x, y, centerX, centerY, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        x: centerX + (x * cos - y * sin),
        y: centerY + (x * sin + y * cos)
    };
}

/**
 * Renders a particle based on the given options and state.
 * @param {CanvasRenderingContext2D} ctx - The drawing context.
 * @param {object} options - The rendering configuration and style.
 * @param {object} p - The particle state.
 * @param {number} alpha - The current alpha multiplier.
 */
function renderParticle(ctx, options, p, alpha) {
    const color = `rgba(${p.r}, ${p.g}, ${p.b}, ${alpha * p.a})`;
    switch ((options.renderMode || "").toLowerCase()) {
        case "text":
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.font = options.font || "20px sans-serif";
            ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${alpha * p.a})`;
            ctx.fillText(options.text || "*", 0, 0);

            if (options.textOutlineColor && options.textOutlineWidth > 0) {
                ctx.lineWidth = options.textOutlineWidth;
                ctx.strokeStyle = options.textOutlineColor;
                ctx.strokeText(options.text || "*", 0, 0);
            }

            ctx.restore();
            break;
        case "image":
            if (p.tintedImage) {
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation);
                ctx.globalAlpha = alpha * p.a;
                ctx.drawImage(p.tintedImage, -p.radius, -p.radius, p.radius * 2, p.radius * 2);
                ctx.restore();
            }
            break;
        case "svg":
            break;
        default:
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            break;
    }
    ctx.globalAlpha = 1;
}
