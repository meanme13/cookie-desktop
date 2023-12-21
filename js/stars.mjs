setTimeout(() => {
    const container = document.getElementById("stars");
    const width = window.screen.width;
    const number = width > 1024 ? 200 : 80;

    for (let i = 0; i < number; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        setStarPosition(star);
        setStarAnimation(star);
        container.appendChild(star);
    }

    function setStarPosition(star) {
        const left = Math.random() * 100 + '%';
        const top = Math.random() * 100 + '%';
        const size = Math.random() - 0.45 + 'vw';
        const brightness = Math.random() * 0.7 + 0.3;

        star.style.left = left;
        star.style.top = top;
        star.style.width = size;
        star.style.height = size;
        star.style.backgroundColor = `rgba(251, 240, 206, ${brightness})`;
    }

    function setStarAnimation(star) {
        const duration = Math.random() * 1.5 + 1.5;
        const delay = Math.random() * 0.4 + 0.1;
        
        star.style.animation = `blink ${duration}s ${delay}s infinite`;
    }
}, 2600);