export function action() {
    document.getElementById("model2").setAttribute("animation-mixer", "clip: cock; timeScale: 1; clampWhenFinished: true; loop: once");
    document.getElementById("model3").setAttribute("visible", true);
    document.getElementById("model3").setAttribute('animation-mixer', "clip: paper; clampWhenFinished: true; loop: once");

    const cookieTip = document.getElementById("cookieTip");
    const katana = document.getElementById("katana");
    
    cookieTip.classList.add("fadeOut");
    katana.classList.add("fadeOut");
    setTimeout(() => { cookieTip.style.display = 'none'; katana.style.display = 'none'; }, 300);

    setTimeout(() => {
        const wishOrCookie = document.getElementById("wishOrCookie");
        const newCookie = document.getElementById("newCookie");

        wishOrCookie.style.display = 'flex';
        wishOrCookie.classList.add("fadeIn");

        newCookie.addEventListener("click", () => {
            localStorage.setItem('newCookie', 'true');
            location.reload();
        });
    }, 300);
}