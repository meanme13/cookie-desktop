function getCookiePosition() {
    const width = window.screen.width;

    if (width <= 2560 && width > 1920) {

        return { pos: "0 0 -2" };
    } else if (width <= 1920 && width > 1440) {
        
        return { pos: "0 0 -3" };
    } else if (width <= 1440 && width > 1024) {

        return { pos: "0 0 -3" };
    } else if (width <= 1024 && width > 768) {

        return { pos: "0 0 -3" };
    } else if (width <= 768 && width > 430) {

        return { pos: "0 0 -3" };
    } else if (width <= 430 && width > 375) {

        return { pos: "0 2 -4" };
    } else if (width <= 375) {

        return { pos: "0 2 -4" };
    } else return { pos: "0 0 -3" };
}

function getDragonPosition() {
    const width = window.screen.width;

    if (width <= 2560 && width > 1920) {

        return { from: "-2.2 1.3 0", to: "-2.2 1.4 0"};
    } else if (width <= 1920 && width > 1440) {

        return { from: "-2.2 1.3 0", to: "-2.2 1.4 0"};
    } else if (width <= 1440 && width > 1024) {

        return { from: "-2.2 1.3 0", to: "-2.2 1.4 0"};
    } else if (width <= 1024 && width > 768) {

        return { from: "-2 2 -2", to: "-2 2.1 -2"};
    } else if (width <= 768 && width > 430) {

        return { from: "-1.8 3.8 -3.5", to: "-1.8 3.9 -3.5"};
    } else if (width <= 430 && width > 375) {

        return { from: "-3.5 4 -5", to: "-3.5 4.1 -5"};
    } else if (width <= 375) {

        return { from: "-3.5 4 -5", to: "-3.5 4.1 -5"};
    } else return { from: "0 0 0", to: "0 0.1 0" };
}

function getDragonAnimation() {
    const width = window.screen.width;

    if (width <= 2560 && width > 1920) {
        
        return { to: "2.2 1.4 -1" };
    } else if (width <= 1920 && width > 1440) {
        
        return { to: "2.2 1.4 -1" };
    } else if (width <= 1440 && width > 1024) {

        return { to: "2 1 -0.5" };
    } else if (width <= 1024 && width > 768) {

        return { to: "2 1 -3" };
    } else if (width <= 768 && width > 430) {

        return { to: "-0.3 0 -6" };
    } else if (width <= 430 && width > 375) {

        return { to: "0.5 2 -5.5" };
    } else if (width <= 375) {

        return { to: "0.5 2 -5.5" };
    } else return { to: "2.5 2 0" };
}

function getDragonScale() {
    const width = window.screen.width;

    if (width <= 2560 && width > 1920) {
        
        return { scale: "4 4 4"};
    } else if (width <= 1920 && width > 1440) {
        
        return { scale: "4 4 4"};
    } else if (width <= 1440 && width > 1024) {

        return { scale: "4 4 4" };
    } else if (width <= 1024 && width > 768) {

        return { scale: "4.5 4.5 4.5" };
    } else if (width <= 768 && width > 430) {

        return { scale: "4.5 4.5 4.5" };
    } else if (width <= 430 && width > 375) {

        return { scale: "3.5 3.5 3.5" };
    } else if (width <= 375) {

        return { scale: "3.5 3.5 3.5" };
    } else return { scale: "3.5 3.5 3.5" };
}

const resizeModels = () => ({
    init: function () {
        const model = document.getElementById('model');
        const model2 = document.getElementById('model2');
        const model3 = document.getElementById('model3');
        
        const { from, to } = getDragonPosition();
        const { scale } = getDragonScale();
        const { pos } = getCookiePosition();

        console.log("FROM, TO", from, to);
        console.log("SCALE", scale);
        console.log("POS", pos);

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