import { action } from "./cutAction.mjs";
import { isCutAble } from "./sceneLoaded.mjs";

var isMoved = false;

const mouseMove = () => ({
    init: function () {
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);

        document.body.addEventListener('mousemove', this.handleMouseMove);
        document.body.addEventListener('mouseup', this.handleMouseUp);
        document.body.addEventListener('touchmove', this.handleTouchMove);
        document.body.addEventListener('touchend', this.handleTouchEnd);
    },

    handleMouseMove: function (event) {
        if (event.buttons === 1) {
            isMoved = true;
        }
    },

    handleMouseUp: function (event) {
        var readyToCut = isCutAble();
        if (isMoved && readyToCut) {
            action();
            isMoved = false;
        }
    },

    handleTouchMove: function (event) {
        isMoved = true;
    },

    handleTouchEnd: function (event) {
        var readyToCut = isCutAble();
        if (isMoved && readyToCut) {
            action();
            isMoved = false;
        }
    }
});

export { mouseMove }