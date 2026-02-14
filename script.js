function nextScreen(screenId) {
    const container = document.getElementById('game-container');
    container.style.opacity = 0;
    
    setTimeout(() => {
        document.querySelectorAll('section').forEach(s => s.hidden = true);
        document.getElementById(screenId).hidden = false;
        container.style.opacity = 1;

        if (screenId === 'final') {
            launchHearts();
        }
    }, 400);
}

function wrong() {
    const container = document.getElementById('game-container');
    container.style.animation = "shake 0.4s ease";
    setTimeout(() => { container.style.animation = ""; }, 400);
    alert("Victor is waiting for the right memory! Try again ❤️");
}

function launchHearts() {
    const end = Date.now() + (5 * 1000);
    const colors = ['#ff2d55', '#ffffff', '#007aff']; // Pink, White, and Medical Blue

    (function frame() {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: colors });
        confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: colors });
        if (Date.now() < end) { requestAnimationFrame(frame); }
    }());
}
