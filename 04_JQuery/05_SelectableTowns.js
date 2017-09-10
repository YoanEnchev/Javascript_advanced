function attachEvents() {
    $('#items li').click(selectOrDeselect);
    $('#showTownsButton').click(printSelectedTowns);

    function selectOrDeselect() {
        let pressedButton = $(this);

        if (!pressedButton.hasClass('data-selected')) {
            pressedButton.addClass('data-selected');
        }

        else {
            pressedButton.removeClass('data-selected');
        }
    }

    function printSelectedTowns() {
        let selectedTowns = $('li.data-selected').toArray()
            .map(e => e.textContent)
            .join(', ');

        $('div#selectedTowns').text(selectedTowns);
    }
}
