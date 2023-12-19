setTimeout(() => {
    const showAR = document.getElementById("showAR");
    const qrWrapper = document.getElementById("qrWrapper");
    const qrContainer = document.getElementById("qrContainer");

    showAR.addEventListener('click', () => {
        qrWrapper.style.display = 'flex';
        qrContainer.classList.add('fadeIn'); 
    });
    qrWrapper.addEventListener('click', () => {
        qrContainer.classList.add('fadeOut');
        qrContainer.classList.remove('fadeIn');
        setTimeout(() => { qrWrapper.style.display = 'none'; qrContainer.classList.remove('fadeOut'); }, 300);
    });
}, 2000);