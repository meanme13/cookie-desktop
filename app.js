var isMoved = false;

AFRAME.registerComponent("mouse-move", {
    init: function () {
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        let model3 = document.getElementById('model3');
        model3.setAttribute("gltf-model", `models/p${ Math.floor(Math.random() * 10) + 1 }.glb`);

        this.el.addEventListener('mousemove', this.handleMouseMove);
        this.el.addEventListener('mouseup', this.handleMouseUp);
    },

    handleMouseMove: function (event) {
        if (event.buttons === 1) {
            isMoved = true;
        }
    },

    handleMouseUp: function (event) {
        let model2 = document.getElementById('model2');
        let model3 = document.getElementById('model3');

        if (isMoved) {
            model2.setAttribute("animation-mixer", "clip: cock; clampWhenFinished: true; loop: once");
            model3.setAttribute("visible", true);
            model3.setAttribute('animation-mixer', "clip: paper; clampWhenFinished: true; loop: once");
            isMoved = false;
        }
    }
});