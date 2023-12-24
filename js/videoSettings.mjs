const hideOnPlay = () => ({
    schema: {type: 'selector'},
    init: function () {
      this.onPlaying = this.onPlaying.bind(this);
      this.onPause = this.onPause.bind(this);
      this.el.object3D.visible = !this.data.playing;
    },
    play: function () {
      if (this.data) {
        this.data.addEventListener('playing', this.onPlaying);
        this.data.addEventListener('pause', this.onPause);
      }
    },
    pause: function () {
      if (this.data) {
        this.data.removeEventListener('playing', this.onPlaying);
        this.data.removeEventListener('pause', this.onPause);
      }
    },
    onPlaying: function (evt) {
        setTimeout(() => {
          this.el.object3D.visible = false;
      }, 400);
    },
    onPause: function (evt) {
      this.el.object3D.visible = true;
    }
});

export { hideOnPlay }