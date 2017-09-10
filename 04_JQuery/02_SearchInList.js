function search() {
    $('#towns li').css('font-weight', '100'); //to be accurate for multiple clicks

    let inputText = $('#searchText').val();
    let containsSearch = $(`#towns li:contains(${inputText}) `);

    for (li of containsSearch) {
        li.style.fontWeight = "bold";
    }
}