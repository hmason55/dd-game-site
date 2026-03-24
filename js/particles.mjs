const textOffsetMap = new Map();
const imageCache = new Map();
const tintCanvas = document.createElement("canvas");
const tintContext = tintCanvas.getContext("2d");
const baselineFrameMs = 1000 / 60;
const maxCanvasSize = 600;
const maxLowEndCanvasSize = 440;
const lowEndHeuristics = {
    reducedMotion: typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    lowCoreCount: typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4,
    saveData: navigator.connection?.saveData === true
};
const isLowEndMode = Object.values(lowEndHeuristics).some(Boolean);
const baseQualityFactor = isLowEndMode ? 0.65 : 1;

function getNextTextOffset(id) {
    const key = id || "global";
    const value = textOffsetMap.get(key) || 0;
    textOffsetMap.set(key, value + 1);
    setTimeout(() => {
        const current = textOffsetMap.get(key) || 1;
        textOffsetMap.set(key, Math.max(0, current - 1));
    }, 600);
    return value;
}

function scalarRange(min, max) {
    return { min, max };
}

function vectorRange(minX, minY, maxX, maxY) {
    return { min: { x: minX, y: minY }, max: { x: maxX, y: maxY } };
}

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

function normalizeOptions(options) {
    const input = options || {};
    const quality = clamp(input.qualityFactor ?? baseQualityFactor, 0.35, 1);
    const glow = (input.glowIntensity || 0) * quality;

    return {
        ...input,
        quality,
        position: input.position || { x: 0, y: 0 },
        offset: input.offset || { x: 0, y: 0 },
        particleCount: input.particleCount || scalarRange(1, 1),
        speed: input.speed || scalarRange(1, 1),
        friction: input.friction || scalarRange(0.96, 0.98),
        lifespan: input.lifespan || scalarRange(450, 650),
        size: input.size || scalarRange(2, 4),
        externalVelocity: input.externalVelocity || vectorRange(0, 0, 0, 0),
        externalAcceleration: input.externalAcceleration || vectorRange(0, 0, 0, 0),
        particleColor: input.particleColor || { min: { r: 1, g: 1, b: 1, a: 1 }, max: { r: 1, g: 1, b: 1, a: 1 } },
        rotation: input.rotation || scalarRange(0, 0),
        rotationSpeed: input.rotationSpeed || scalarRange(0, 0),
        renderMode: (input.renderMode || "default").toLowerCase(),
        loop: input.loop === true,
        emitRate: input.emitRate ?? 0,
        arcDirection: input.arcDirection ?? -90,
        arcAngle: input.arcAngle ?? 90,
        emitterRotation: input.emitterRotation ?? 0,
        blendMode: input.blendMode || "source-over",
        glowIntensity: glow,
        endAlpha: input.endAlpha ?? 0,
        zIndex: input.zIndex ?? 1000
    };
}

function randomScalar(min, max) {
    return Math.random() * (max - min) + min;
}

function randomRange(range) {
    if (!range || range.min == null || range.max == null) {
        return 0;
    }

    if (typeof range.min === "number" && typeof range.max === "number") {
        return randomScalar(range.min, range.max);
    }

    if (typeof range.min.x === "number" && typeof range.max.x === "number") {
        return {
            x: randomScalar(range.min.x, range.max.x),
            y: randomScalar(range.min.y, range.max.y)
        };
    }

    return 0;
}

function randomColor(colorRange) {
    const min = colorRange?.min || {};
    const max = colorRange?.max || {};
    const readChannel = (channel, fallback) => {
        const minValue = min[channel] ?? fallback;
        const maxValue = max[channel] ?? minValue;
        return randomScalar(minValue, maxValue);
    };

    return {
        r: readChannel("r", 1) * 255,
        g: readChannel("g", 1) * 255,
        b: readChannel("b", 1) * 255,
        a: readChannel("a", 1)
    };
}

function getTintCacheKey(size, r, g, b, a) {
    return `${size}:${Math.round(r)}:${Math.round(g)}:${Math.round(b)}:${Math.round(a * 1000)}`;
}

function tintImage(baseImage, r, g, b, a, size, tintCache) {
    if (!tintContext) {
        return baseImage;
    }

    const key = getTintCacheKey(size, r ?? 255, g ?? 255, b ?? 255, a ?? 1);
    if (tintCache.has(key)) {
        return tintCache.get(key);
    }

    tintCanvas.width = size;
    tintCanvas.height = size;
    tintContext.clearRect(0, 0, size, size);
    tintContext.drawImage(baseImage, 0, 0, size, size);

    const red = r ?? 255;
    const green = g ?? 255;
    const blue = b ?? 255;
    const alpha = a ?? 1;

    if (red !== 255 || green !== 255 || blue !== 255 || alpha !== 1) {
        tintContext.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        tintContext.globalCompositeOperation = "source-atop";
        tintContext.fillRect(0, 0, size, size);
        tintContext.globalCompositeOperation = "source-over";
    }

    const source = document.createElement("canvas");
    source.width = size;
    source.height = size;
    source.getContext("2d")?.drawImage(tintCanvas, 0, 0);
    tintCache.set(key, source);
    return source;
}

function loadEmitterImage(src) {
    if (!src) {
        return Promise.resolve(null);
    }

    if (imageCache.has(src)) {
        return imageCache.get(src);
    }

    const imagePromise = new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = src;
    });

    imageCache.set(src, imagePromise);
    return imagePromise;
}

function calculateCanvasSize(options) {
    const radiusByShape = options.shape === "box"
        ? Math.max(options.areaSize?.x || 0, options.areaSize?.y || 0)
        : options.shape === "arc"
            ? Math.max(options.areaSize?.x || 0, options.areaSize?.y || 0)
            : 0;

    const travelDistance = options.lifespan.max > 0
        ? options.speed.max * (options.lifespan.max / baselineFrameMs)
        : 0;

    const dynamicPadding = Math.ceil((options.size.max * 2) + radiusByShape + travelDistance + options.glowIntensity + 24);
    const unclampedSize = Math.max(220, dynamicPadding * 2);
    return Math.min(isLowEndMode ? maxLowEndCanvasSize : maxCanvasSize, unclampedSize);
}

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

    if (options.renderMode === "text") {
        const step = getNextTextOffset(options.elementId);
        position.y -= step * 30;
    }

    const canvas = document.createElement("canvas");
    canvas.id = options.id;

    const dpr = Math.min(window.devicePixelRatio || 1, isLowEndMode ? 1.25 : 1.75);
    const size = calculateCanvasSize(options);
    const half = size / 2;

    Object.assign(canvas.style, {
        position: "fixed",
        left: `${position.x - half}px`,
        top: `${position.y - half}px`,
        pointerEvents: "none",
        zIndex: options.zIndex
    });

    canvas.width = Math.round(size * dpr);
    canvas.height = Math.round(size * dpr);
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    document.body.appendChild(canvas);
    return { canvas, dpr };
}

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
        default:
            return { x: centerX, y: centerY };
    }
}

function rotatePoint(x, y, centerX, centerY, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        x: centerX + (x * cos - y * sin),
        y: centerY + (x * sin + y * cos)
    };
}

function renderParticle(ctx, options, p, alpha) {
    const red = p.currentR ?? p.r;
    const green = p.currentG ?? p.g;
    const blue = p.currentB ?? p.b;
    const particleAlpha = p.currentA ?? p.a;
    const drawAlpha = alpha * particleAlpha;

    if (options.renderMode === "text") {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = options.font || "20px sans-serif";
        ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${drawAlpha})`;
        if (options.glowIntensity > 0) {
            ctx.shadowBlur = options.glowIntensity;
            ctx.shadowColor = options.glowColor || `rgba(${red}, ${green}, ${blue}, ${drawAlpha})`;
        }
        ctx.fillText(options.text || "*", 0, 0);
        if (options.textOutlineColor && options.textOutlineWidth > 0) {
            ctx.lineWidth = options.textOutlineWidth;
            ctx.strokeStyle = options.textOutlineColor;
            ctx.strokeText(options.text || "*", 0, 0);
        }
        ctx.restore();
        return;
    }

    if (options.renderMode === "image" && p.tintedImage) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = drawAlpha;
        if (options.glowIntensity > 0) {
            ctx.shadowBlur = options.glowIntensity;
            ctx.shadowColor = options.glowColor || `rgba(${red}, ${green}, ${blue}, ${drawAlpha})`;
        }
        ctx.drawImage(p.tintedImage, -p.radius, -p.radius, p.radius * 2, p.radius * 2);
        ctx.restore();
        ctx.globalAlpha = 1;
        return;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${drawAlpha})`;
    if (options.glowIntensity > 0) {
        ctx.shadowBlur = options.glowIntensity;
        ctx.shadowColor = options.glowColor || `rgba(${red}, ${green}, ${blue}, ${drawAlpha})`;
    }
    ctx.fill();
    ctx.shadowBlur = 0;
}

export const particleSystem = {
    createParticleEmitter: function (rawOptions) {
        const options = normalizeOptions(rawOptions);
        const canvasSetup = setupCanvas(options);
        const canvas = canvasSetup.canvas;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return;
        }

        const dpr = canvasSetup.dpr;
        if (dpr !== 1) {
            ctx.scale(dpr, dpr);
        }

        const renderWidth = canvas.width / dpr;
        const renderHeight = canvas.height / dpr;
        const tintCache = new Map();
        const particlePool = [];
        const particles = [];
        const effectiveMax = options.loop ? Math.ceil(options.particleCount.max * 4) : options.particleCount.max;
        const maxActiveParticles = Math.max(12, Math.ceil(effectiveMax * options.quality));
        let emitting = true;
        let frameMs = baselineFrameMs;
        let dynamicQuality = options.quality;
        let lastFrameAt = performance.now();

        ctx.globalCompositeOperation = options.blendMode;

        function getParticle() {
            return particlePool.pop() || {};
        }

        function recycleParticle(particle) {
            particle.tintedImage = null;
            particlePool.push(particle);
        }

        function createParticle() {
            const particle = getParticle();
            const color = randomColor(options.particleColor);
            const endColor = options.endParticleColor ? randomColor(options.endParticleColor) : color;
            const radius = randomRange(options.size);
            const centerX = renderWidth / 2;
            const centerY = renderHeight / 2;
            const rotationRad = options.emitterRotation * Math.PI / 180;
            const spawn = calculateSpawnPosition(options.shape, options.areaSize, centerX, centerY, rotationRad, options.arcDirection, options.arcAngle);
            const arcCenterRad = options.arcDirection * (Math.PI / 180);
            const arcHalfRad = (options.arcAngle / 2) * (Math.PI / 180);
            const randomAngle = arcCenterRad + (Math.random() * arcHalfRad * 2 - arcHalfRad);
            const velocity = randomRange(options.externalVelocity) || { x: 0, y: 0 };
            const acceleration = randomRange(options.externalAcceleration) || { x: 0, y: 0 };

            Object.assign(particle, {
                x: spawn.x,
                y: spawn.y,
                radius,
                r: color.r,
                g: color.g,
                b: color.b,
                a: color.a,
                endR: endColor.r,
                endG: endColor.g,
                endB: endColor.b,
                endA: endColor.a,
                speed: randomRange(options.speed),
                directionX: Math.cos(randomAngle),
                directionY: Math.sin(randomAngle),
                friction: randomRange(options.friction),
                lifespan: randomRange(options.lifespan),
                startTime: performance.now(),
                externalVelocityX: velocity.x,
                externalVelocityY: velocity.y,
                externalAccelerationX: acceleration.x,
                externalAccelerationY: acceleration.y,
                tintedImage: null,
                rotation: randomRange(options.rotation),
                rotationSpeed: randomRange(options.rotationSpeed)
            });

            if (options.renderMode === "image" && options._loadedImage) {
                particle.tintedImage = tintImage(options._loadedImage, color.r, color.g, color.b, color.a, radius * 2, tintCache);
            }

            return particle;
        }

        function emitParticles() {
            if (!emitting) {
                return;
            }

            const count = Math.floor(randomRange(options.particleCount) * dynamicQuality);
            const available = Math.max(0, maxActiveParticles - particles.length);
            const spawnCount = Math.min(count, available);
            for (let i = 0; i < spawnCount; i++) {
                particles.push(createParticle());
            }

            if (options.loop) {
                setTimeout(emitParticles, options.emitRate);
            }
        }

        function destroy(id) {
            emitting = false;
            document.getElementById(id)?.remove();
            DotNet.invokeMethodAsync("DDGame", "UntrackParticleEmitter", id);
        }

        function updateParticles() {
            const now = performance.now();
            const elapsed = now - lastFrameAt;
            lastFrameAt = now;
            frameMs = (frameMs * 0.9) + (elapsed * 0.1);
            if (frameMs > 26) {
                dynamicQuality = Math.max(0.4, dynamicQuality - 0.03);
            } else if (frameMs < 18) {
                dynamicQuality = Math.min(options.quality, dynamicQuality + 0.02);
            }

            const frameScale = Math.min(1.35, Math.max(0.55, baselineFrameMs / Math.max(1, frameMs)));
            const step = Math.max(0.3, Math.min(2.2, elapsed / baselineFrameMs));
            ctx.clearRect(0, 0, renderWidth, renderHeight);

            for (let i = particles.length - 1; i >= 0; i--) {
                const particle = particles[i];
                if ((now - particle.startTime) >= particle.lifespan) {
                    particles[i] = particles[particles.length - 1];
                    particles.pop();
                    recycleParticle(particle);
                    continue;
                }

                particle.rotation += particle.rotationSpeed * step;
                particle.externalVelocityX += particle.externalAccelerationX * step;
                particle.externalVelocityY += particle.externalAccelerationY * step;
                const speed = particle.speed * frameScale;
                particle.x += ((particle.directionX * speed) + particle.externalVelocityX) * step;
                particle.y += ((particle.directionY * speed) + particle.externalVelocityY) * step;
                particle.speed *= Math.pow(particle.friction, step);

                const lifeProgress = Math.min((now - particle.startTime) / particle.lifespan, 1);
                const fade = Math.pow(1 - lifeProgress, 2.5);
                const alpha = fade * (1 - options.endAlpha) + options.endAlpha;
                particle.currentR = particle.r + (particle.endR - particle.r) * lifeProgress;
                particle.currentG = particle.g + (particle.endG - particle.g) * lifeProgress;
                particle.currentB = particle.b + (particle.endB - particle.b) * lifeProgress;
                particle.currentA = particle.a + (particle.endA - particle.a) * lifeProgress;
                renderParticle(ctx, options, particle, alpha);
            }

            if (particles.length > 0 || options.loop) {
                requestAnimationFrame(updateParticles);
                return;
            }

            destroy(canvas.id);
        }

        if (options.renderMode === "image" && options.imageSrc) {
            loadEmitterImage(options.imageSrc).then(img => {
                options._loadedImage = img;
                emitParticles();
                updateParticles();
            });
            return;
        }

        emitParticles();
        updateParticles();
    },

    destroyParticleEmitter: function (id) {
        document.getElementById(id)?.remove();
        DotNet.invokeMethodAsync("DDGame", "UntrackParticleEmitter", id);
    }
};
