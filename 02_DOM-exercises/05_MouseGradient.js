function attachGradientEvents() {
    let gradient = document.getElementById('gradient-box');
    let result = document.getElementById('result');

    gradient.addEventListener('mousemove', displayPercent);
    gradient.addEventListener('mouseout', dontDisplayPercent);

    function displayPercent(event) {
        let cursor_horizontality = event.offsetX;
        let percent = (cursor_horizontality / this.clientWidth) * 100;
        result.innerText = `${Math.trunc(percent)}%`;       
    }

    function dontDisplayPercent() {
        result.innerText = ``;    
    }
}