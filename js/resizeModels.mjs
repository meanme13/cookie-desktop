function getCurrentResolution() {
    const width = window.screen.width;
    console.log(width);

    const resolutions = {
        1920: { x: -2.5, s: 4.5 },
        1440: { x: -1, s: 3.8 },
        1024: { x: -2.0, s: 3.5 },
        768: { x: -1.5, s: 2.5 },
        430: { x: 0, s: 0 },
        375: { x: 0, s: 0 },
        320: { x: 0, s: 0 }
    };

    return resolutions[width] || { x: 0, s: 1 };
}

const resizeModels = () => ({
    init: function () {
        const model = document.getElementById('model');
        const {x, s} = getCurrentResolution();

        model.setAttribute('animation', 
            `property: position; from: ${x} -0.1 0; to: ${x} 0.1 0; dur: 2000; dir: alternate; easing: linear; delay: 0; loop: true`);
        model.setAttribute("rotation", "0 0 0");
        model.setAttribute("scale", `${s} ${s} ${s}`);
    }
});

export { resizeModels }