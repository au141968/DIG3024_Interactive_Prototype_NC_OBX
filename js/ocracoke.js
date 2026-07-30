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
const ocracokeBtn = document.getElementById("ocracokePlay");

if (ocracokeBtn) {
    ocracokeBtn.addEventListener("click", () => {
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
        const audio = new Audio("sound/516076__breviceps__pirate-band-performs-drunken-sailor.wav");
        audio.play();
    });
}
