function getCookiePosition() {
    const width = window.screen.width;

    const resolutions = {
        2560: { pos: "0 0 -3" },
        1920: { pos: "0 0 -3" },
        1440: { pos: "0 0 -3" },
        1024: { pos: "0 0 -3" },
        768: { pos: "0 0 -3" },
        430: { pos: "0 3 -3" },
        375: { pos: "0 3 -3" },
    };

    return resolutions[width] || { pos: "0 0 0" };
}

function getDragonPosition() {
    const width = window.screen.width;

    const resolutions = {
        2560: { from: "0 2 0", to: "0 2.1 0"},
        1920: { from: "-2.9 1.3 0", to: "-2.9 1.4 0"},
        1440: { from: "-0.5 1.6 -1", to: "-0.5 1.7 -1"},
        1024: { from: "-2 2 -2", to: "-2 2.1 -2"},
        768: { from: "-2 3.3 -3", to: "-2 3.4 -3"},
        430: { from: "2.5 2.3 -4", to: "2.5 2.4 -4"},
        375: { from: "2.5 2.3 -4", to: "2.5 2.4 -4"},
    };

    return resolutions[width] || { from: "0 0 0", to: "0 0.1 0" };
}

function getDragonAnimation() {
    const width = window.screen.width;

    const resolutions = {
        2560: { to: "4 0.4 -1" },
        1920: { to: "2.2 1.4 -1" },
        1440: { to: "1 1 -0.5" },
        1024: { to: "2 1 -3" },
        768: { to: "-0.3 0 -6" },
        430: { to: "2.5 2 -4" },
        375: { to: "2.5 2 -4" }
    };

    return resolutions[width] || { from: "0 -0.1 0", to: "0 0.1 0" };
}

function getDragonScale() {
    const width = window.screen.width;

    const resolutions = {
        2560: { scale: "4.5 4.5 4.5"},
        1920: { scale: "4 4 4"},
        1440: { scale: "4.5 4.5 4.5"},
        1024: { scale: "4.5 4.5 4.5"},
        768: { scale: "4.5 4.5 4.5"},
        430: { scale: "3.5 3.5 3.5"},
        375: { scale: "3.5 3.5 3.5"}
    };

    return resolutions[width] || { scale: "1 1 1" };
}

const resizeModels = () => ({
    init: function () {
        const model = document.getElementById('model');
        const model2 = document.getElementById('model2');
        const model3 = document.getElementById('model3');
        
        const { from, to } = getDragonPosition();
        const { scale } = getDragonScale();
        const { pos } = getCookiePosition();

        if (model) {
            model.setAttribute('animation', 
                    `property: position; from: ${from}; to: ${to}; dur: 2000; dir: alternate; easing: linear; delay: 0; loop: true`);
            model.setAttribute("rotation", "0 0 0");
            model.setAttribute("scale", `${scale}`);

            model2.setAttribute("position", `${pos}`);
            model3.setAttribute("position", `${pos}`);
        }
    }
});

export { resizeModels }
export { getDragonAnimation }
export { getDragonPosition }