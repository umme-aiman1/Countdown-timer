let countdown;
const countdownDisplay = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minute'),
    seconds: document.getElementById('second')
};

function updateTimer(endTime) {
    const now = new Date().getTime();
    const remaining = endTime - now;

    if (remaining < 0) {
        clearInterval(countdown);
        return;
    }

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    countdownDisplay.days.innerText = days < 10 ? `0${days}` : days;
    countdownDisplay.hours.innerText = hours < 10 ? `0${hours}` : hours;
    countdownDisplay.minutes.innerText = minutes < 10 ? `0${minutes}` : minutes;
    countdownDisplay.seconds.innerText = seconds < 10 ? `0${seconds}` : seconds;
}

document.getElementById('start').addEventListener('click', () => {
    const countdownDate = document.getElementById('countdown-date').valueAsNumber;

    if (!countdownDate) {
        alert('Please select a valid date.');
        return;
    }

    clearInterval(countdown); // Clear any running countdown
    countdown = setInterval(() => updateTimer(countdownDate), 1000);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(countdown);
});

document.getElementById('restart').addEventListener('click', () => {
    clearInterval(countdown);
    countdownDisplay.days.innerText = '00';
    countdownDisplay.hours.innerText = '00';
    countdownDisplay.minutes.innerText = '00';
    countdownDisplay.seconds.innerText = '00';
});
