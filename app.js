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

        if (model && model2 && model3) {
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 1000);
        }

        this.el.addEventListener('mousemove', this.handleMouseMove);
        this.el.addEventListener('mouseup', this.handleMouseUp);
        this.el.addEventListener('touchmove', this.handleTouchMove);
        this.el.addEventListener('touchend', this.handleTouchEnd);
        
        if (isMobileDevice()) {
            light1.setAttribute("position", "10 8 -7");
            light2.setAttribute("position", "-10 8 -7");
            light3.setAttribute("position", "0 -7 -7");

            model.setAttribute("position", "0.2 3.2 -10.8");
            model2.setAttribute("position", "0 1 -6");
            model3.setAttribute("position", "0 1 -6");

            model2.setAttribute("rotation", "0 0 0");
            model3.setAttribute("rotation", "0 0 0");
        }
    },

    handleMouseMove: function (event) {
        if (event.buttons === 1) {
            isMoved = true;
        }
    },

    handleMouseUp: function (event) {
        if (isMoved) {
            model2.setAttribute("animation-mixer", "clip: cock; clampWhenFinished: true; loop: once");
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
            model2.setAttribute("animation-mixer", "clip: cock; clampWhenFinished: true; loop: once");
            model3.setAttribute("visible", true);
            model3.setAttribute('animation-mixer', "clip: paper; clampWhenFinished: true; loop: once");
            isMoved = false;
        }
    }
});