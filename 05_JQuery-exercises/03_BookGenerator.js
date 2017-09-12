function createBook(selector, title, author, isbn) {
    let containerID = selector.substring(1);
    let id = 1;

    let wrapper = $(`div#${containerID}`)
        .append($(`<div id="book${id}">`)     
        .append(`<p class="title">${title}</p>`)
        .append(`<p class="author">${author}</p>`)
        .append(`<p class="isbn">${isbn}</p>`)
        .append('<button>Select</button>')
        .append('<button>Deselect</button>'));

    $('button:contains(Select)').click(selectedElement);
    $('button:contains(Deselect)').click(deselectElement);

    function selectedElement() {
        $(this).parent().css('border', '2px solid blue');
    }

    function deselectElement() {
        $(this).parent().css('border', 'none');
    }
}
