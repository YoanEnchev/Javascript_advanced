window.onload=function() {
    timer();
}

function timer() {
    let passedTime = 0; //in seconds

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    let display_hours = $('#hours');
    let display_minutes = $('#minutes');
    let display_seconds = $('#seconds');

    $('#start-timer').click(turnTimerOn);


    function turnTimerOn() {
        let timer = setInterval(secondsPass, 10);
        $('#stop-timer').click(stopTimer);

       function stopTimer() {
           clearInterval(timer);
       }
    }

    function secondsPass() {
        hours = Math.trunc(passedTime / 3600);

        if(hours > 0) {
             minutes = Math.trunc((passedTime / 60) - hours * 60);
        }

        else {
             minutes = Math.trunc(passedTime / 60);
        }
        seconds = passedTime % 60;

        hours = addPrefixZeroIfNeeded(hours); // like 02 instead of 2
        minutes = addPrefixZeroIfNeeded(minutes); 
        seconds = addPrefixZeroIfNeeded(seconds); 

        display_hours.text(hours);
        display_minutes.text(minutes);
        display_seconds.text(seconds);

        passedTime++;

        function addPrefixZeroIfNeeded(time) {
            if(time < 10) {
                time = "0" + time + "";
            }

            return time;
        }
    }
}
