function initializeTable() {
    let table = $('#countriesTable');
    $('#createLink').click(getCapitalAndCityAndCreateRow);

    createRows('Bulgaria', 'Sofia');
    createRows('Germany', 'Berlin');
    createRows('Russia', 'Moscow');

    fixLinks();

    function fixLinks() {
        //first show every link then hide (display: none) specific ones
        let links = $('a');
        links.css('display', 'inline');

        let dataRowsCount = $('table tbody tr').toArray().length;

        let upButton = $('tbody tr:nth-child(3) a:contains(Up)');
        let downButton = $(`tbody tr:nth-child(${dataRowsCount}) a:contains(Down)`);

        upButton.css('display', 'none');
        downButton.css('display', 'none');
    }

    function deleteRow() {
        $(this).parent().parent().remove();
        fixLinks()
    }

    function moveDown() {
        let row = $(this).parent().parent();
        let after = row.next(); //bottom row

        row.insertAfter(after);
        fixLinks()
    }

    function moveUp() {
        let row = $(this).parent().parent();
        let before = row.prev(); //upper row

        row.insertBefore(before);
        fixLinks();
    }

    function getCapitalAndCityAndCreateRow() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        createRows(country, capital)
    }

    function createRows(country, capital) {
        let row = $('<tr>')
            .append(`<td>${country}</td>`)
            .append(`<td>${capital}</td>`)

        let links = $("<td>")
            .append($('<a href="#">[Up]</a>').click(moveUp))
            .append(' ')
            .append($('<a href="#">[Down]</a>').click(moveDown))
            .append(' ')
            .append($('<a href="#">[Delete]</a>').click(deleteRow));

        row.append(links);
        table.append(row);

        fixLinks();
    }
}