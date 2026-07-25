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

let bodiePlay = document.getElementById("play");
if (bodiePlay) {
    bodiePlay.addEventListener("click", playMusic);
}
function playMusic() {
    let audio = new Audio("sound/gentle-ocean-waves-birdsong-and-gull-7109.mp3");
    audio.play()
}
bodiePlay.addEventListener("click" , playMusic);

let play = document.getElementById("play");
if (play) {
    play.addEventListener("click", playMusic);
}
function playMusic() {
    let audio = new Audio("sound/alban_gogh-old-plane-sound-effect-183515.mp3");
    audio.play()
}
play.addEventListener("click" , playMusic);
