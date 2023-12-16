var isMoved = false;
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

const mouseMove = () => ({
    init: function () {
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);

        var model = document.getElementById('model');
        var model2 = document.getElementById('model2');
        var model3 = document.getElementById('model3');
        var light1 = document.getElementById('light1');
        var light2 = document.getElementById('light2');
        var light3 = document.getElementById('light3');
        model3.setAttribute("gltf-model", `assets/models/p${ Math.floor(Math.random() * 10) + 1 }.glb`);

        if (model) {
            setTimeout(() => {
                const preloader = document.getElementById('preloader');
                const showCookie = document.getElementById("showCookie");
                const cookieTip = document.getElementById("cookieTip");
                preloader.style.display = 'none';

                showCookie.addEventListener('click', () => {
                    const congrats = document.getElementById("congrats");
                    model.setAttribute("animation-mixer", "clip: clip1; loop: once; clampWhenFinished: true; timeScale: 1");
                    congrats.classList.add("fadeOut");
                    setTimeout(() => {congrats.style.display = 'none'}, 300);
                    
                    model2.setAttribute("fade-in", "");
                    setTimeout(() => {model2.setAttribute("visible", true);}, 1000);

                    setTimeout(() => {
                        cookieTip.style.display = 'block';
                        cookieTip.classList.add("fadeIn");
                    }, 5000);
                });
            }, 2000);
        }

        this.el.addEventListener('mousemove', this.handleMouseMove);
        this.el.addEventListener('mouseup', this.handleMouseUp);
        this.el.addEventListener('touchmove', this.handleTouchMove);
        this.el.addEventListener('touchend', this.handleTouchEnd);
        
        if (isMobileDevice()) {
            light1.setAttribute("position", "10 10 -23");
            light2.setAttribute("position", "0 8 -21");
            light3.setAttribute("position", "2 -7 -7");


            model.setAttribute("position", "0.1 2.8 -23");
            model2.setAttribute("position", "0 1 -10");
            model3.setAttribute("position", "0 1 -10");

            model.setAttribute("rotation", "0 -25 0");
            model2.setAttribute("rotation", "0 0 0");
            model3.setAttribute("rotation", "0 0 0");

            model.setAttribute("scale", "1.2 1.2 1.2");
        }
    },

    handleMouseMove: function (event) {
        if (event.buttons === 1) {
            isMoved = true;
        }
    },

    handleMouseUp: function (event) {
        if (isMoved) {
            model2.setAttribute("animation-mixer", "clip: cock; timeScale: 1; clampWhenFinished: true; loop: once");
            model3.setAttribute("visible", true);
            model3.setAttribute('animation-mixer', "clip: paper; clampWhenFinished: true; loop: once");
            isMoved = false;

            const cookieTip = document.getElementById("cookieTip");
            cookieTip.classList.add("fadeOut");
            setTimeout(() => { cookieTip.style.display = 'none' }, 300);

            setTimeout(() => {
                const wishOrCookie = document.getElementById("wishOrCookie");
                wishOrCookie.style.display = 'flex';
                wishOrCookie.classList.add("fadeIn");
            }, 3000);
        }
    },

    handleTouchMove: function (event) {
        isMoved = true;
    },

    handleTouchEnd: function (event) {
        if (isMoved) {
            model2.setAttribute("animation-mixer", "clip: cock; timeScale: 1; clampWhenFinished: true; loop: once");
            model3.setAttribute("visible", true);
            model3.setAttribute('animation-mixer', "clip: paper; clampWhenFinished: true; loop: once");
            isMoved = false;

            const cookieTip = document.getElementById("cookieTip");
            cookieTip.classList.add("fadeOut");
            setTimeout(() => { cookieTip.style.display = 'none' }, 300);

            setTimeout(() => {
                const wishOrCookie = document.getElementById("wishOrCookie");
                wishOrCookie.style.display = 'flex';
                wishOrCookie.classList.add("fadeIn");
            }, 3000);
        }
    }
});

export { mouseMove }