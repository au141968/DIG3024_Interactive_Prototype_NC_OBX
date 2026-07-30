const buttons = document.querySelectorAll('.imageBtn');
const popups = document.querySelectorAll('.textPopup');
const closeBtns = document.querySelectorAll('.closeBtn');

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        popups[index].classList.add('show');
    });
});

closeBtns.forEach((close, index) => {
    close.addEventListener('click', () => {
        popups[index].classList.remove('show');
    });
});

window.addEventListener('click', (event) => {
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.classList.remove('show');
        }
    });
});

// ------------------------------
// SOUND BUTTON 1
// ------------------------------
const bodieBtn = document.getElementById("bodiePlay");

if (bodieBtn) {
    bodieBtn.addEventListener("click", () => {
        const audio = new Audio("sound/freesound_community-atlantic-storm-58999.mp3");
        audio.play();
    });
}

// ------------------------------
// SOUND BUTTON 2
// ------------------------------
const playBtn = document.getElementById("play");

if (playBtn) {
    playBtn.addEventListener("click", () => {
        const audio = new Audio("sound/alban_gogh-old-plane-sound-effect-183515.mp3");
        audio.play();
    });
}


