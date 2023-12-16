import { mouseMove } from './js/mouseMove.mjs';
import { fadeIn } from './js/fadeIn.mjs';
import { getModelLower } from './js/getModelLower.mjs';
import { resizeModels } from './js/resizeModels.mjs';
import './js/addHTML.mjs';

AFRAME.registerComponent("mouse-move", mouseMove());
AFRAME.registerComponent('fade-in', fadeIn());
AFRAME.registerComponent("get-model-lower", getModelLower());
AFRAME.registerComponent('resize-models', resizeModels());


setTimeout(() => {
    const showAR = document.getElementById("showAR");
    const qrWrapper = document.getElementById("qrWrapper");
    const qrWrapperClose = document.getElementById("qrWrapperClose");
    const qrContainer = document.getElementById("qrContainer");

    showAR.addEventListener('click', () => {
        qrWrapper.style.display = 'flex';
        qrContainer.classList.add('fadeIn'); 
    });
    qrWrapperClose.addEventListener('click', () => { 
        qrContainer.classList.add('fadeOut');
        qrContainer.classList.remove('fadeIn');
        setTimeout(() => { qrWrapper.style.display = 'none'; qrContainer.classList.remove('fadeOut'); }, 300);
    });
    qrWrapper.addEventListener('click', () => {
        qrContainer.classList.add('fadeOut');
        qrContainer.classList.remove('fadeIn');
        setTimeout(() => { qrWrapper.style.display = 'none'; qrContainer.classList.remove('fadeOut'); }, 300);
    });
}, 2000);


