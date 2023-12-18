import { submitData } from "./sendWish.mjs";

var isAbleToCut = false;

const sceneLoaded = () => ({
    init: function () {
        var model = document.getElementById('model');
        var model2 = document.getElementById('model2');
        var model3 = document.getElementById('model3');
        // model3.setAttribute("gltf-model", `assets/models/p${ Math.floor(Math.random() * 10) + 1 }.glb`);

        if (model) {
            setTimeout(() => {
                const preloader = document.getElementById('preloader');
                preloader.style.display = 'none';
            }, 4000 );

            setTimeout(() => {
                const showCookie = document.getElementById("showCookie");
                const cookieTip = document.getElementById("cookieTip");
                const sendWish = document.getElementById("sendWish");
                const sendWishContainer = document.getElementById("sendWishContainer");
                const wishOrCookie = document.getElementById("wishOrCookie");
                const buttonClicked = localStorage.getItem('newCookie');
                const logo = document.getElementById("logo");
                const check = document.getElementById("check");
                const confirmWish = document.getElementById("confirmWish");

                check.addEventListener("change", () => {
                    confirmWish.disabled = !confirmWish.disabled;
                });

                confirmWish.addEventListener('click', submitData);

                logo.addEventListener('click', () => {
                    localStorage.removeItem('newCookie');
                    location.reload();
                });

                // if (buttonClicked) {
                //     document.getElementById("congrats").style.display = 'none';
                //     model2.setAttribute("fade-in", "");
                //     setTimeout(() => {model2.setAttribute("visible", true); isAbleToCut = true }, 1000);

                //     setTimeout(() => {
                //         cookieTip.style.display = 'block';
                //         cookieTip.classList.add("fadeIn");
                //     }, 2000);
                // }

                showCookie.addEventListener('click', () => {
                    const congrats = document.getElementById("congrats");
                    model.setAttribute("animation-mixer", "clip: clip1; loop: once; clampWhenFinished: true; timeScale: 0.8");
                    congrats.classList.add("fadeOut");
                    setTimeout(() => {congrats.style.display = 'none'}, 300);
                    
                    model2.setAttribute("fade-in", "");
                    setTimeout(() => {model2.setAttribute("visible", true); isAbleToCut = true }, 1000);

                    setTimeout(() => {
                        cookieTip.style.display = 'block';
                        cookieTip.classList.add("fadeIn");
                    }, 5000);
                });

                sendWish.addEventListener('click', () => {
                    wishOrCookie.classList.add("fadeOut");
                    setTimeout(() => {
                        wishOrCookie.style.display = 'none';
                        sendWishContainer.style.display = 'flex';
                        sendWishContainer.classList.add("fadeIn");
                        model2.setAttribute("visible", false);
                        model3.setAttribute("visible", false);
                        isAbleToCut = false;
                    }, 300);
                });
            }, 3000);
        }
    }
});

function isCutAble() {
    return isAbleToCut;
}

export { sceneLoaded }
export { isCutAble }