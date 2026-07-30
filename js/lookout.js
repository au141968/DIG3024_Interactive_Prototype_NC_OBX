// Popup logic stays the same
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
const lookoutBtn = document.getElementById("lookoutPlay");

if (lookoutBtn) {
    lookoutBtn.addEventListener("click", () => {
        const audio = new Audio("sound/gentle-ocean-waves-birdsong-and-gull-7109.mp3");
        audio.play();
    });
}

// ------------------------------
// SOUND BUTTON 2
// ------------------------------
const playBtn = document.getElementById("play");

if (playBtn) {
    playBtn.addEventListener("click", () => {
        const audio = new Audio("sound/freesound_community-submarine-33709.mp3");
        audio.play();
    });
}

