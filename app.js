var isMoved = false;

AFRAME.registerComponent("mouse-move", {
    init: function () {
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);

        this.el.addEventListener('mousemove', this.handleMouseMove);
        this.el.addEventListener('mouseup', this.handleMouseUp);
    },

    handleMouseMove: function (event) {
        if (event.buttons === 1) {
            isMoved = true;
        }
    },

    handleMouseUp: function (event) {
        // if (isMoved) {
        //     let model = document.getElementById('model');
        //     model.setAttribute('animation-mixer', {
        //         clip: 'pockets',
        //         loop: 'repeat',
        //         crossFadeDuration: 0.4,
        //     })
        //     isMoved = false;
        // }
        let model = document.getElementById('model');
        let model2 = document.getElementById('model2');

        if (model.getAttribute("visible")) {
            model.setAttribute("visible", false);
            model2.setAttribute("visible", true);
        } else {
            model.setAttribute("visible", true);
            model2.setAttribute("visible", false);
        }
    }
});