function getDragonPosition() {
    const width = window.screen.width;

    const resolutions = {
        2560: { from: "-3.5 2 0", to: "-3.5 2.1 0"},
        1920: { from: "-2.9 1.3 0", to: "-2.9 1.4 0"},
        1440: { from: "-1.4 1.6 0", to: "-1.4 1.7 0"},
        1024: { from: "-2 2 0", to: "-2 2.1 0"},
        768: { from: "-2.5 3.3 -1", to: "-2.5 3.4 -1"},
        430: { from: "-3.5 4.3 -7", to: "-3.5 4.4 -7"},
        375: { from: "-3.5 8.3 -15", to: "-3.5 8.4 -15"},
    };

    return resolutions[width] || { from: "0 -0.1 0", to: "0 0.1 0" };
}

function getDragonAnimation() {
    const width = window.screen.width;

    const resolutions = {
        2560: {
            1:{ to: "4 0.4 -1", rotation: "0 0 0"},
            2:{ to: "-1 2 -6", rotation: "0 -20 -20"},
            3:{ to: "-12 1 -2", rotation: "0 130 0"}
        },
        1920: {
            1:{ to: "2 1.4 -1", rotation: "0 0 0"},
            2:{ to: "2 5 -10", rotation: "0 -20 -40"},
            3:{ to: "-6 1 -2", rotation: "0 100 0"}
        },
        1440: {
            1:{ to: "1 1 -0.5", rotation: "0 0 0"},
            2:{ to: "3 5 -9", rotation: "0 -20 -40"},
            3:{ to: "-6 1 -2", rotation: "0 100 0"}
        },
        1024: {
            1:{ to: "1 1 -0.5", rotation: "0 0 0"},
            2:{ to: "3 5 -9", rotation: "0 -20 -40"},
            3:{ to: "-6 1 -2", rotation: "0 100 0"}
        },
        768: {
            1:{ to: "1 1 -0.5", rotation: "0 0 0"},
            2:{ to: "2 4 -9", rotation: "0 0 40"},
            3:{ to: "-2 -3.5 -2", rotation: "0 80 0"}
        },
        430: {
            1:{ to: "1 -1 -0.5", rotation: "0 0 0"},
            2:{ to: "2 4 -9", rotation: "0 0 40"},
            3:{ to: "3 -3.5 -2", rotation: "0 80 0"}
        },
        375: {
            1:{ to: "1 -1 -0.5", rotation: "0 0 0"},
            2:{ to: "2 4 -9", rotation: "0 0 40"},
            3:{ to: "10 -10 -3", rotation: "0 80 0"}
        },
    };

    return resolutions[width] || { from: "0 -0.1 0", to: "0 0.1 0" };
}

function getDragonScale() {
    const width = window.screen.width;

    const resolutions = {
        2560: { scale: "4.5 4.5 4.5"},
        1920: { scale: "4.5 4.5 4.5"},
        1440: { scale: "4 4 4"},
        1024: { scale: "4 4 4"},
        768: { scale: "4 4 4"},
        430: { scale: "4 4 4"},
        375: { scale: "4 4 4"}
    };

    return resolutions[width] || { scale: "1 1 1" };
}

const resizeModels = () => ({
    init: function () {
        const model = document.getElementById('model');
        const { from, to } = getDragonPosition();
        const { scale } = getDragonScale();

        if (model) {
            model.setAttribute('animation', 
                    `property: position; from: ${from}; to: ${to}; dur: 2000; dir: alternate; easing: linear; delay: 0; loop: true`);
            model.setAttribute("rotation", "0 0 0");
            model.setAttribute("scale", `${scale}`);
        }
    }
});

export { resizeModels }
export { getDragonAnimation }
export { getDragonPosition }