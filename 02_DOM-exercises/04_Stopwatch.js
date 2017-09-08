window.onload = function () {
    let timeInSeconds = 0;
    let displayTime = document.getElementById('time');

    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');

    let intervalID = "";  //used to stop time

    startButton.addEventListener("click", startWatch);
    stopButton.addEventListener("click", stopwatch);

    function stopwatch() {
        stopButton.disabled = true;
        startButton.disabled = false;

        clearTimeout(intervalID);
        displayTime.textContent = `00:00`;
    }

    function startWatch(event) {
        stopButton.disabled = false;
        startButton.disabled = true;

        intervalID = setInterval(addSeconds, 1000) //repeat on every second

        function addSeconds() {
            let minutes = Math.trunc(timeInSeconds / 60);
            let seconds = timeInSeconds % 60;

            let display_seconds = seconds;
            let display_minutes = minutes;

            if (minutes < 10) {
                display_minutes = "0" + display_minutes;
            }

            if (seconds < 10) {
                display_seconds = "0" + display_seconds;
            }

            displayTime.textContent = `${display_minutes}:${display_seconds}`;
            timeInSeconds++;
        }
    }
}