const getModelLower = () => ({
    init: function () {
        const el = this.el;
        console.log('Component initialized', el);

        this.el.addEventListener('animation-finished', (event) => {
            console.info(event);
            this.el.setAttribute('animation', 'property: position; to: 0.6 -3.5 -3; dur: 1000; easing: easeOutQuart');
        });
    }
});

export { getModelLower }