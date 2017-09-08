window.onload = function () {
    countdown(600);

    function countdown(startTime) { //start time in seconds
        let time = startTime;
        let visibleTimer = document.getElementById('time');
        let interval = setInterval(decrement, 1000); // execure on every second /1000ms = 1sec/

        function decrement() {

            let minutes = Math.trunc(time / 60);
            let seconds = time - minutes * 60;

            let seconds_display = seconds

            if (seconds === 0 && minutes === 0) {
                clearInterval(interval);
            }

            if (seconds < 10) {
                seconds_display = "0" + seconds;
            }

            time--; //1 sec less

            visibleTimer.value = `${minutes}:${seconds_display}`;
        }
    }
}