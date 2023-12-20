import { submitData } from "./sendWish.mjs";
import { getDragonAnimation } from "./resizeModels.mjs";

var isAbleToCut = false;

function moveDragon() {
    const dragonContainer = document.getElementById('dragonContainer');
    const { to } = getDragonAnimation();

    dragonContainer.setAttribute('animation', 
        `property: position; to: ${to}; dur: 2000; easing: linear; delay: 0; loop: 1`);
}

const sceneLoaded = () => ({
    init: function () {
        var model = document.getElementById('model');
        var model2 = document.getElementById('model2');
        var model3 = document.getElementById('model3');
        model3.setAttribute("gltf-model", `assets/models/p${ Math.floor(Math.random() * 25) + 1 }.glb`);

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
                const againCookie = document.getElementById("againCookie");
                const katana = document.getElementById("katana");
                const width = window.screen.width;

                againCookie.addEventListener('click', () => {
                    localStorage.setItem('newCookie', true);
                    location.reload();
                });

                check.addEventListener("change", () => {
                    confirmWish.disabled = !confirmWish.disabled;
                });

                confirmWish.addEventListener('click', () => {
                    submitData();
                });

                logo.addEventListener('click', () => {
                    localStorage.removeItem('newCookie');
                    location.reload();
                });

                if (buttonClicked) {
                    moveDragon();
                    document.getElementById("congrats").style.display = 'none';
                    model2.setAttribute("fade-in", "");
                    setTimeout(() => {model2.setAttribute("visible", true); isAbleToCut = true }, 1000);
                    setTimeout(() => {
                        katana.style.display = 'block';
                        katana.classList.add("fadeIn");
                    }, 1500);
                    setTimeout(() => {
                        cookieTip.style.display = 'block';
                        cookieTip.classList.add("fadeIn");
                    }, 2000);
                }

                showCookie.addEventListener('click', () => {
                    setTimeout(() => { moveDragon();}, 4000);

                    const congrats = document.getElementById("congrats");
                    model.setAttribute("animation-mixer", "clip: clip1; loop: once; clampWhenFinished: true; timeScale: 0.7");
                    congrats.classList.add("fadeOut");
                    setTimeout(() => {congrats.style.display = 'none'}, 300);

                    model2.setAttribute("fade-in", "");
                    setTimeout(() => {
                        model2.setAttribute("visible", true); 
                        isAbleToCut = true;
                    }, 1200);

                    setTimeout(() => {
                        cookieTip.style.display = 'block';
                        cookieTip.classList.add("fadeIn");

                        if (width >= 1024) {
                            katana.style.display = 'block';
                            katana.classList.add("fadeIn");

                            document.addEventListener("mousemove", function (e) {
                                katana.style.left = e.pageX - katana.width / -10 + "px";
                                katana.style.top = e.pageY - katana.height / 2+ "px";
                            });
                        }
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