function toggle() {
    let content = document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];

    if (button.textContent === 'More') {
        button.textContent = "Less";
        content.style.display = 'block'; //show content
    }

    else {
        button.textContent = "More"; 
        content.style.display = 'none'; //hide content
    }
}
