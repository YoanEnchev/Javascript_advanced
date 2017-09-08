function extractText() {
    let list = document.querySelectorAll('ul li');

    for (item of list) {
        document.getElementById('result').value += `${item.textContent}\n`;
    }
}