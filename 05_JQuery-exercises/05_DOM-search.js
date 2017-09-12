function domSearch(selector, caseSensitive) {
    let wrapper = $(`div${selector}`);
    $('body').append(wrapper);

    let addControls = $($('<div class="add-controls">')
        .append('<label>Enter text:<input></label>'))
        .append('<a class="button" style="display: inline-block; margin-left: 10px;">Add</a>');

    let seachControls = $($('<div class="search-controls">')
        .append('<label>Search:<input></label>'));

    let resultControls = $('<div class="result-controls">');
    let list = $('<ul>');

    resultControls.append(list)

    wrapper.append(addControls)
        .append(seachControls)
        .append(resultControls);

    $("div.add-controls a.button").click(addToList);
    $("a:contains(X)").click(deleteListItem);

    let seachInput = $("label:contains(Search:) input");

    seachInput.change(showOnlySearchedItems);

    function showOnlySearchedItems() {
        let searcValue = seachInput.val();

        let allListItems = $('li strong');
        let searchedItems = $(`li strong:contains(${searcValue})`);

        allListItems.parent().hide(); //first hide every one then show only the needed ones

        for (item of allListItems) {
            let content = $(item).text();

            if (caseSensitive) {
                if (content.indexOf(searcValue) !== -1) {
                    $(item).parent().show();
                }
            }

            else {
                if (content.toLowerCase().indexOf(searcValue.toLowerCase()) !== -1) {
                    $(item).parent().show();
                }
            }
        }
    }

    function deleteListItem() {
        $(this).parent().remove();
    }

    function addToList() {
        let input_add = $("label:contains(Enter text:) input").val();

        let newElement = $($('<li class="list-item">')
            .append($('<a class="button">X</a>').click(deleteListItem)))
            .append(`<strong>${input_add}</strong>`)

        list.append(newElement);
    }
}
