function notify(message) {
    let notification = document.getElementById('notification');
    notification.textContent = message;

    notification.style.display = 'inline'; //appear
    let interval = setInterval(disapear, 2000); //disapear after 2 seconds;
    interval;

    function disapear() {
        notification.style.display = 'none';
        clearInterval(interval);
    }
}
