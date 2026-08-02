// Create audio
let audio = document.createElement("audio");
audio.src = "audios/Car Drive Sound.mp3";
audio.loop = true;

// Select elements
let track = document.querySelector(".track");
let wheels = document.querySelectorAll(".wheel img");

// Default speed 
let speed = 5;

// Function to apply speed everywhere
function updateSpeed() {
    track.style.animationDuration = speed + "s";

    wheels.forEach(function (wheel) {
        wheel.style.animationDuration = speed + "s";
    });
}

// Start audio on first click only
let started = false;
document.addEventListener("click", function () {
    if (!started) {
        audio.play();
        started = true;
    }
});

// Increase speed (Arrow Up)
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
        if (speed > 1) {
            speed -= 1; // faster
            updateSpeed();
        }
    }
});

// Decrease speed (Arrow Down)
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
        speed += 1; // slower
        updateSpeed();
    }
});

// Initial setup
updateSpeed();