

let minutes = 24; // Use let instead of const since we need to modify its value
let shortBreak = 4;
let longBreak = 14;


const alarmSound = new Audio('alarm.mp3'); 





function startTimer() {
    let seconds = 60; // Start seconds from 60
    const interval = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                // Stop the timer when both minutes and seconds are 0
                document.querySelector(".timer").textContent = "Time's up!";
                alarmSound.play();
                clearInterval(interval);
            } else {
                minutes -= 1; // Decrease minutes when seconds reach 0
                seconds = 60; // Reset seconds to 60
            }
        } else {
            seconds -= 1;
        }
        document.querySelector(".timer").textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }, 1000); // Update every second

   
}



function shortTimer() {
    let seconds = 60; // Start seconds from 60
    const interval = setInterval(() => {
        if (seconds === 0) {
            if (shortBreak === 0) {
                document.querySelector(".timer").textContent = "Time's up!";
                alarmSound.play();
                clearInterval(interval);
               
            } else {
                shortBreak -= 1; // Decrease minutes when seconds reach 0
                seconds = 60; // Reset seconds to 60
            }
        }
        seconds -= 1;
        document.querySelector(".timer").textContent = shortBreak + ":" + (seconds < 10 ? "0" : "") + seconds;
    }, 1000); // Update every second
}

function longTimer() {
    let seconds = 60; // Start seconds from 60
    const interval = setInterval(() => {
        if (seconds === 0) {
            if (longBreak === 0) {
                document.querySelector(".timer").textContent = "Time's up!";
                alarmSound.play();
                clearInterval(interval);
                
            } else {
                longBreak -= 1; // Decrease minutes when seconds reach 0
                seconds = 60; // Reset seconds to 60
            }
        }
        seconds -= 1;
        document.querySelector(".timer").textContent = longBreak + ":" + (seconds < 10 ? "0" : "") + seconds;
    }, 1000); // Update every second
}


const clickSound = new Audio('audio.mp3'); 

document.querySelector(".shadow-button").addEventListener("click", () => {
    clickSound.play(); // Play the sound when the button is clicked
});

document.querySelector(".short-break").addEventListener("click", () => {
    clickSound.play(); // Play the sound when the button is clicked
});


document.querySelector(".long-break").addEventListener("click", () => {
    clickSound.play(); // Play the sound when the button is clicked
});





