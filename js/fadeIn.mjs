const fadeIn = () => ({
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

export { fadeIn }