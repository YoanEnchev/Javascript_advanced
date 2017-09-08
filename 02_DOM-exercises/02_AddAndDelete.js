function addItem() {
    let addText = document.getElementById('newText').value;
    let newLI = document.createElement('li');
    let deleteLink = document.createElement('a');

    newLI.textContent = addText;

    deleteLink.textContent = ' [Delete]';
    deleteLink.href = '#';
    newLI.appendChild(deleteLink); //so it makes li a

    let list = document.getElementById('items');
    list.appendChild(newLI); //so it makes ul li a

    deleteLink.addEventListener('click', deleteItem)

    function deleteItem() {
        let deleteLI = this.parentNode;
        deleteLI.remove();
    }
}
