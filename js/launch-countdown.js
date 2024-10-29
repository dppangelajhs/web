const launchDate = new Date("2024-10-29T15:00:00").getTime();
let prevDays, prevHours, prevMinutes, prevSeconds;
let countdownInterval; 

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = launchDate - now;

    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown-container").classList.add("hide");
        document.querySelector(".coming-soon").classList.add("hide");
        document.querySelector(".release").classList.remove("release");
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    function updateTimeBox(id, value, prevValue) {
        const element = document.getElementById(id);
        if (value !== prevValue) {
            element.classList.remove('fall-animation');
            void element.offsetWidth;
            element.innerHTML = value;
            element.classList.add('fall-animation');
        }
    }

    updateTimeBox("days", days, prevDays);
    updateTimeBox("hours", hours, prevHours);
    updateTimeBox("minutes", minutes, prevMinutes);
    updateTimeBox("seconds", seconds, prevSeconds);

    prevDays = days;
    prevHours = hours;
    prevMinutes = minutes;
    prevSeconds = seconds;
}

updateCountdown();
countdownInterval = setInterval(function () {
    updateCountdown();
}, 1000); 
