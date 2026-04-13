(function () {
    const CONTAINER_ID = "party-effects-layer";

    function ensureLayer() {
        let layer = document.getElementById(CONTAINER_ID);
        if (!layer) {
            layer = document.createElement("div");
            layer.id = CONTAINER_ID;
            layer.className = "party-effects-layer";
            document.body.appendChild(layer);
        }

        return layer;
    }

    function randomBetween(min, max) {
        return Math.random() * (max - min) + min;
    }

    function makeConfettiBurst(type) {
        const layer = ensureLayer();
        const count = type === "bingo" ? 80 : 36;
        const originY = type === "tile" ? "62%" : type === "kickoff" ? "35%" : "45%";

        for (let i = 0; i < count; i += 1) {
            const particle = document.createElement("span");
            particle.className = "party-confetti";
            particle.style.left = `${randomBetween(10, 90)}vw`;
            particle.style.top = originY;
            particle.style.setProperty("--drift-x", `${randomBetween(-20, 20)}vw`);
            particle.style.setProperty("--drift-y", `${randomBetween(-16, -6)}vh`);
            particle.style.setProperty("--spin", `${randomBetween(-520, 520)}deg`);
            particle.style.setProperty("--delay", `${randomBetween(0, 0.14)}s`);
            particle.style.setProperty("--dur", `${randomBetween(0.85, 1.45)}s`);
            layer.appendChild(particle);

            window.setTimeout(() => {
                particle.remove();
            }, 1900);
        }
    }

    function pulseElementById(id) {
        if (!id) {
            return;
        }

        const element = document.getElementById(id);
        if (!element) {
            return;
        }

        element.classList.remove("party-button-pulse");
        void element.offsetWidth;
        element.classList.add("party-button-pulse");

        window.setTimeout(() => {
            element.classList.remove("party-button-pulse");
        }, 420);
    }

    window.partyEffects = {
        burst(type) {
            makeConfettiBurst(type || "tap");
        },
        pulseButton(id) {
            pulseElementById(id);
        }
    };
})();
