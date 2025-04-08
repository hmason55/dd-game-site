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

        function createParticle() {
            let color = randomColor(options.particleColor);
            let arcCenterRad = options.arcDirection * (Math.PI / 180);
            let arcHalfRad = (options.arcAngle / 2) * (Math.PI / 180);
            let randomAngle = arcCenterRad + (Math.random() * arcHalfRad * 2 - arcHalfRad);

            let externalVelocity = randomRange(options.externalVelocity);
            let externalAcceleration = randomRange(options.externalAcceleration);

            return {
                x: canvas.width / 2,
                y: canvas.height / 2,
                radius: randomRange(options.size),
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
                externalAccelerationY: externalAcceleration.y
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

                p.externalVelocityX += p.externalAccelerationX;
                p.externalVelocityY += p.externalAccelerationY;

                p.x += (p.directionX * p.speed) + p.externalVelocityX;
                p.y += (p.directionY * p.speed) + p.externalVelocityY;

                p.speed *= p.friction;

                let alpha = Math.max(0.1, Math.pow(1 - (now - p.startTime) / p.lifespan, 2.5));

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${alpha * p.a})`;
                ctx.fill();
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

        emitParticles();
        updateParticles();
    },
    destroyParticleEmitter: function(id) {
        const canvas = document.getElementById(id);
        document.body.removeChild(canvas);
        DotNet.invokeMethodAsync("DDGame", "UntrackParticleEmitter", id);
    }
};
