const body = document.getElementById("body");

fetch("./html/background.html")
    .then(response => response.text())
    .then(html => body.insertAdjacentHTML('afterbegin', html));

fetch("./html/preloader.html")
    .then(response => response.text())
    .then(html => body.insertAdjacentHTML('afterbegin', html));

fetch("./html/congrats.html")
    .then(response => response.text())
    .then(html => body.insertAdjacentHTML('afterbegin', html));

fetch("./html/qr.html")
    .then(response => response.text())
    .then(html => body.insertAdjacentHTML('afterbegin', html));

fetch("./html/wishOrCookie.html")
    .then(response => response.text())
    .then(html => body.insertAdjacentHTML('afterbegin', html));

fetch("./html/sendWish.html")
    .then(response => response.text())
    .then(html => body.insertAdjacentHTML('afterbegin', html));

fetch("./html/success.html")
    .then(response => response.text())
    .then(html => body.insertAdjacentHTML('afterbegin', html));

fetch("./html/error.html")
    .then(response => response.text())
    .then(html => body.insertAdjacentHTML('afterbegin', html));