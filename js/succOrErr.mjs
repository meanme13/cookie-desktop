function navToSuccess() {
    const success = document.getElementById("success");
    const sendWishContainer = document.getElementById("sendWishContainer");

    sendWishContainer.classList.add("fadeOut");
    setTimeout(() => {
        sendWishContainer.style.display = 'none';
        success.style.display = 'flex';
        success.classList.add("fadeIn");
    }, 300);
}

function throwError() {
    const errorWrapper = document.getElementById("errorWrapper");
    const errorContainer = document.getElementById("errorContainer");

    errorWrapper.style.display = 'flex';
    errorContainer.classList.add("fadeIn");

    errorWrapper.addEventListener('click', () => {
        errorContainer.classList.add('fadeOut');
        errorContainer.classList.remove('fadeIn');
        setTimeout(() => { errorWrapper.style.display = 'none'; errorContainer.classList.remove('fadeOut'); }, 300);
    });
}

export { navToSuccess }
export { throwError }