function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemText').value;

    let option = document.createElement('option');
    option.textContent = text;
    option.value = value;

    let selector = document.getElementById('menu');
    selector.appendChild(option);
}
