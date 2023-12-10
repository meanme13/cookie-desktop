var isMoved = false;
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

AFRAME.registerComponent("mouse-move", {
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
        var preloader = document.getElementById('preloader');
        model3.setAttribute("gltf-model", `models/p${ Math.floor(Math.random() * 10) + 1 }.glb`);
        // model3.setAttribute("gltf-model", `models/temp.glb`);

        if (model && model2 && model3) {
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 1000);

            setTimeout(() => {
                model2.setAttribute("shadow", "receive: true; cast: true");
            }, 2300);
        }

        this.el.addEventListener('mousemove', this.handleMouseMove);
        this.el.addEventListener('mouseup', this.handleMouseUp);
        this.el.addEventListener('touchmove', this.handleTouchMove);
        this.el.addEventListener('touchend', this.handleTouchEnd);
        
        if (isMobileDevice()) {
            // light1.setAttribute("position", "10 8 -20");
            // light2.setAttribute("position", "-10 8 -20");
            // light3.setAttribute("position", "0 -7 -7");
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
        }
    }
});

AFRAME.registerComponent('fade-in', {
    schema: {
        duration: {type: 'number', default: 550},
    },

    init() {
        this.el.addEventListener('model-loaded', this.onModelLoaded.bind(this));
    },

    onModelLoaded() {
        const mesh = this.el.getObject3D('mesh');
        if (!mesh) return;
        this.setOpacity(mesh, 0);
        this.mesh = mesh;
        this.startTime = Date.now() + 2000;
        this.animateFadeIn();
    },

    animateFadeIn() {
        if (!this.mesh || !this.startTime) return;

        const elapsedTime = Date.now() - this.startTime;
        const progress = THREE.MathUtils.clamp(elapsedTime / this.data.duration, 0, 1);
        this.setOpacity(this.mesh, progress);

        if (progress < 1) {
        requestAnimationFrame(this.animateFadeIn.bind(this));
        }
    },

    setOpacity(mesh, opacity) {
        mesh.traverse((node) => {
        if (node.isMesh) {
            node.material.transparent = true;
            node.material.opacity = opacity;
        }
        });
    },
});