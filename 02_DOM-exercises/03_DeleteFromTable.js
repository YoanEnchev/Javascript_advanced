function deleteByEmail() {
    let email_search = document.getElementsByName('email')[0].value;
    let emailCells = document.querySelectorAll('tr td:nth-child(2)');

    let deletedEmail = false;
    let result_message = document.getElementById('result');

    for (emailCell of emailCells) {
       
        if (emailCell.textContent === email_search) {
            let rowOfEmail = emailCell.parentNode;
            rowOfEmail.remove();

            deletedEmail = true;
           
            result_message.textContent = 'Deleted.'
            break;
        }
    }

    if (!deletedEmail) {
        result_message.textContent = 'Not found.';
    }
}