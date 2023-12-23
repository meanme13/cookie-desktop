setTimeout(() => {
    const width = window.screen.width;
    const showAR = document.getElementById("showAR");
    const qrWrapper = document.getElementById("qrWrapper");
    const qrContainer = document.getElementById("qrContainer");

    showAR.addEventListener('click', () => {
        if (width < 768) location.href('https://meanme13.github.io/cookie/');

        qrWrapper.style.display = 'flex';
        qrContainer.classList.add('fadeIn'); 
    });
    qrWrapper.addEventListener('click', () => {
        qrContainer.classList.add('fadeOut');
        qrContainer.classList.remove('fadeIn');
        setTimeout(() => { qrWrapper.style.display = 'none'; qrContainer.classList.remove('fadeOut'); }, 300);
    });
}, 2000);