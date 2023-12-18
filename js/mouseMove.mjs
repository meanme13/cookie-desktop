import { action } from "./cutAction.mjs";
import { isCutAble } from "./sceneLoaded.mjs";

var isMoved = false;

const mouseMove = () => ({
    init: function () {
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);

        this.el.addEventListener('mousemove', this.handleMouseMove);
        this.el.addEventListener('mouseup', this.handleMouseUp);
        this.el.addEventListener('touchmove', this.handleTouchMove);
        this.el.addEventListener('touchend', this.handleTouchEnd);
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