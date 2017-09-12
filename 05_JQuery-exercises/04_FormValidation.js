function validate() {
    let username = $('#username');
    let email = $('#email');

    let password = $('#password');
    let confirmPassword = $('#confirm-password');

    let companyChecker = $('#company');
    let companyForm = $('#companyInfo');
    let companyNumber = $('#companyNumber');

    let username_regex = /([A-Za-z0-9]){3,20}/;
    let email_regex = /[^@]+@{1}[^@]+\..*/;
    let password_regex = /\w{5,15}/;

    let allTextFields = $('input');

    username.change(usernameValidation);
    email.change(emailValidation);

    password.change(passwordValidation);
    confirmPassword.change(confirmPasswordValidation);

    companyChecker.click(hideOrShowCompanyField);
    companyNumber.change(companyNumberValidation);

    allTextFields.change(displayValidIfNeeded);


    function displayValidIfNeeded() {
        allTextFields = $('input');

        let allAreValid = true;
        let valid = $('#valid');

        if (!companyChecker.is(':checked')) {
            allTextFields = Array.from(allTextFields)
            allTextFields.pop(); //remove company number input
        }

        for (textField of allTextFields) {
            let color = $(textField).css('border-color');
            console.log(color);

            if ($(textField).css('border-color') === 'rgb(255, 0, 0)' || $(textField).val() === "") {
                allAreValid = false;
            }
        }

        if (allAreValid) {
            valid.show();
        }

        else {
            valid.hide();
        }
    }

    function companyNumberValidation() {
        let number = Number($(this).val());

        if (number > 999 && number < 10000) {
            removeInvalidOutput(companyNumber);
        }

        else {
            showInvalid(companyNumber);
        }
    }

    function hideOrShowCompanyField() {
        if ($(this).is(':checked')) {
            companyForm.show();
        }

        else {
            companyForm.hide();
        }
    }

    function confirmPasswordValidation() {
        if (confirmPassword.val() !== password.val()) {
            showInvalid(confirmPassword)
        }

        else {
            removeInvalidOutput(confirmPassword)
        }
    }

    function usernameValidation() {
        if (!username_regex.test(username.val())) { //if invalid
            showInvalid(username) //change border color to red
        }

        else {
            removeInvalidOutput(username)
        }
    }

    function emailValidation() {
        if (!email_regex.test(email.val())) {
            showInvalid(email)
        }

        else {
            removeInvalidOutput(email)
        }
    }

    function passwordValidation() {
        if (!password_regex.test(password.val())) {
            showInvalid(password)
        }

        else {
            removeInvalidOutput(password)
        }

        confirmPasswordValidation();
    }

    function showInvalid(textfield) {
        textfield.css('border-color', 'red');
    }

    function removeInvalidOutput(textfield) {
        textfield.css('border-color', 'initial');
    }
}
