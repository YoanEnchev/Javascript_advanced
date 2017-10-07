function attachEvents() {
    $('#btnDelete').click(deleteSelected);
    $('#btnAdd').click(addNewOption);

    let listOfTowns = $('#towns');
    let textField = $('#newItem');

    function deleteSelected() {
        $('select option:selected').remove();
    }
    
    function addNewOption() {
        let townName = textField.val();

        if(townName !== '') {
            listOfTowns.append(`<option>${townName}</option>`);
            textField.val('');
        }
    }
}
