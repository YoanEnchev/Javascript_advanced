function attachEventsListeners() {
    let allButtons = document.querySelectorAll('[type="button"]');

    for (button of allButtons) {
        button.addEventListener('click', calculate);
    }

    function calculate() {
        let days = document.getElementById('days'); //inputs
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');

        let days_num = Number(days.value); //values of inputs as numbers
        let hours_num = Number(hours.value);
        let minutes_num = Number(minutes.value);
        let seconds_num = Number(seconds.value);

        if (days.value !== "") { // days field is filled
            hours_num = days_num * 24;
            minutes_num = hours_num * 60;
            seconds_num = minutes_num * 60;
        }

        if (hours.value !== "") {
            days_num = hours_num / 24;
            minutes_num = hours_num * 60;
            seconds_num = minutes_num * 60;
        }

        if (minutes.value !== "") {
            seconds_num = minutes_num * 60;
            hours_num = minutes_num / 60;
            days_num = hours_num / 24;
        }

        if (seconds.value !== "") {
            minutes_num = seconds_num / 60;
            hours_num = minutes_num / 60;
            days_num = hours_num / 24;
        }

        days.value = days_num;
        hours.value = hours_num;
        minutes.value = minutes_num;
        seconds.value = seconds_num;
    }
}
