let timerId;

const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    if (timerId) clearInterval(timerId);
    timerId = setInterval(updateClock, 1000);
});

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    clearInterval(timerId);
});

function updateClock() {
    const clock = document.getElementById('clock');

    const now = new Date();

    let hours = now.getHours();
    if (hours < 9) {
        hours = "0" + hours;
    }

    let minutes = now.getMinutes();
    if (minutes < 9) {
        minutes = "0" + minutes;
    }

    let seconds = now.getSeconds();
    if (seconds < 9) {
        seconds = "0" + seconds;
    }

    clock.textContent = hours + ':' + minutes + ':' + seconds;
}
