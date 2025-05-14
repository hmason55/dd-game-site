window.particleSystem = {
    createParticleEmitter: function (options) {
        let position = {
            x: options.position.x + options.offset.x,
            y: options.position.y + options.offset.y
        };

        if (options.elementId) {
            let element = document.getElementById(options.elementId);
            if (element) {
                let rect = element.getBoundingClientRect();
                position.x = rect.left + rect.width / 2 + options.offset.x;
                position.y = rect.top + rect.height / 2 + options.offset.y;
            }
        }

        const canvas = document.createElement("canvas");
        canvas.id = options.id;
        document.body.appendChild(canvas);

        Object.assign(canvas.style, {
            position: "fixed",
            left: `${position.x - 1024}px`,
            top: `${position.y - 1024}px`,
            pointerEvents: "none",
            zIndex: options.zIndex
        });

        canvas.width = 2048;
        canvas.height = 2048;

        const ctx = canvas.getContext("2d");
        let particles = [];
        let emitting = true;

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

        function randomColor(colorRange) {
            return {
                r: randomRange({ min: colorRange.min.r, max: colorRange.max.r }) * 255,
                g: randomRange({ min: colorRange.min.g, max: colorRange.max.g }) * 255,
                b: randomRange({ min: colorRange.min.b, max: colorRange.max.b }) * 255,
                a: randomRange({ min: colorRange.min.a, max: colorRange.max.a })
            };
        }

        function tintImage(baseImage, r, g, b, a, size) {
            const off = document.createElement("canvas");
            off.width = size;
            off.height = size;
            const octx = off.getContext("2d");

            // Draw the image
            octx.drawImage(baseImage, 0, 0, size, size);

            // Apply tint
            octx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
            octx.globalCompositeOperation = "source-atop";
            octx.fillRect(0, 0, size, size);
            octx.globalCompositeOperation = "source-over";

            return off;
        }

        function createParticle() {
            let color = randomColor(options.particleColor);

            let externalVelocity = randomRange(options.externalVelocity);
            let externalAcceleration = randomRange(options.externalAcceleration);

            const radius = randomRange(options.size);
            let tintedImage = null;

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            let spawnX = centerX;
            let spawnY = centerY;

            const shape = (options.shape || "point").toLowerCase();
            const rotationDeg = options.emitterRotation || 0;
            const rotationRad = rotationDeg * (Math.PI / 180);

            switch (shape) {
                case "box": {
                    const width = options.areaSize?.x || 100;
                    const height = options.areaSize?.y || 100;

                    const localX = Math.random() * width - width / 2;
                    const localY = Math.random() * height - height / 2;

                    const cos = Math.cos(rotationRad);
                    const sin = Math.sin(rotationRad);

                    spawnX = centerX + (localX * cos - localY * sin);
                    spawnY = centerY + (localX * sin + localY * cos);
                    break;
                }

                case "arc": {
                    const arcRadius = (options.areaSize?.x || 100) / 2;
                    const arcCenterRad = options.arcDirection * (Math.PI / 180);
                    const arcHalfRad = (options.arcAngle / 2) * (Math.PI / 180);
                    const randomAngle = arcCenterRad + (Math.random() * arcHalfRad * 2 - arcHalfRad);
                    const distance = Math.random() * arcRadius;

                    // Step 1: Calculate position in arc-local space
                    let localX = Math.cos(randomAngle) * distance;
                    let localY = Math.sin(randomAngle) * distance;

                    // Step 2: Apply emitter rotation to the arc shape
                    const emitterRad = (options.emitterRotation || 0) * (Math.PI / 180);
                    const cos = Math.cos(emitterRad);
                    const sin = Math.sin(emitterRad);

                    spawnX = centerX + (localX * cos - localY * sin);
                    spawnY = centerY + (localX * sin + localY * cos);
                    break;
                }

                case "point":
                default:
                    break;
            }

            const arcCenterRad = options.arcDirection * (Math.PI / 180);
            const arcHalfRad = (options.arcAngle / 2) * (Math.PI / 180);
            const randomAngle = arcCenterRad + (Math.random() * arcHalfRad * 2 - arcHalfRad);

            if (options.renderMode?.toLowerCase() === "image" && options._loadedImage) {
                const size = radius * 2;
                tintedImage = tintImage(options._loadedImage, color.r, color.g, color.b, color.a, size);
            }

            return {
                x: spawnX,
                y: spawnY,
                radius,
                r: color.r, g: color.g, b: color.b, a: color.a,
                speed: randomRange(options.speed),
                directionX: Math.cos(randomAngle),
                directionY: Math.sin(randomAngle),
                friction: randomRange(options.friction),
                lifespan: randomRange(options.lifespan),
                startTime: performance.now(),
                externalVelocityX: externalVelocity.x,
                externalVelocityY: externalVelocity.y,
                externalAccelerationX: externalAcceleration.x,
                externalAccelerationY: externalAcceleration.y,
                tintedImage,
                rotation: randomRange(options.rotation || { min: 0, max: 0 }),
                rotationSpeed: randomRange(options.rotationSpeed || { min: 0, max: 0 }),
            };
        }


        function emitParticles() {
            if (!emitting) return;

            let particleCount = Math.floor(randomRange(options.particleCount));
            for (let i = 0; i < particleCount; i++) {
                particles.push(createParticle());
            }

            if (options.loop) {
                setTimeout(emitParticles, options.emitRate);
            }
        }

        function updateParticles() {
            let now = performance.now();
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, index) => {
                if ((now - p.startTime) >= p.lifespan) {
                    particles.splice(index, 1);
                    return;
                }

                p.rotation += p.rotationSpeed;
                p.externalVelocityX += p.externalAccelerationX;
                p.externalVelocityY += p.externalAccelerationY;

                p.x += (p.directionX * p.speed) + p.externalVelocityX;
                p.y += (p.directionY * p.speed) + p.externalVelocityY;

                p.speed *= p.friction;

                let alpha = Math.max(0.1, Math.pow(1 - (now - p.startTime) / p.lifespan, 2.5));
                ctx.globalAlpha = alpha * p.a;

                switch (options.renderMode?.toLowerCase()) {
                    case "text":
                        ctx.save();
                        ctx.translate(p.x, p.y);
                        ctx.rotate(p.rotation);
                        ctx.font = options.font || "20px sans-serif";
                        ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${alpha * p.a})`;
                        ctx.fillText(options.text || "*", 0, 0);
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
                        // Optional: requires SVG parsing or using <img> fallback with data URI
                        break;

                    default:
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${alpha * p.a})`;
                        ctx.fill();
                        break;
                }

                ctx.globalAlpha = 1;
            });

            if (particles.length > 0 || options.loop) {
                requestAnimationFrame(updateParticles);
            } else {
                destroy(canvas.id);
            }
        }

        function destroy(id) {
            const canvas = document.getElementById(id);
            document.body.removeChild(canvas);
            DotNet.invokeMethodAsync("DDGame", "UntrackParticleEmitter", id);
        }

        if (options.renderMode?.toLowerCase() === "image" && options.imageSrc) {
            const img = new Image();
            img.onload = () => {
                options._loadedImage = img;
                emitParticles();
                updateParticles();
            };
            img.onerror = (e) => {
                console.error("Failed to load image for particle:", options.imageSrc, e);
                emitParticles();
                updateParticles(); // fallback to still emit even if image fails
            };
            img.src = options.imageSrc;
        } else {
            emitParticles();
            updateParticles();
        }
    },
    destroyParticleEmitter: function(id) {
        const canvas = document.getElementById(id);
        document.body.removeChild(canvas);
        DotNet.invokeMethodAsync("DDGame", "UntrackParticleEmitter", id);
    }
};
