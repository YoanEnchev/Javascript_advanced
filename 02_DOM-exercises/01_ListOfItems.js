function addItem() {
    let addText = document.getElementById('newItemText').value;

    if (addText != "") {
        let addLI = document.createElement('li')
        addLI.textContent = addText;

        let list = document.getElementById('items');
        list.appendChild(addLI);
    }
  }