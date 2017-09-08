function validate() {
    let input = document.getElementById('email');
    input.style.outline = "none";

    let regex_validate = /^[a-z]+@[a-z]+\.[a-z]+$/;

    input.addEventListener('change', informIfInvalid);

    function informIfInvalid() {
        let userEmail = input.value;

        if (!userEmail.match(regex_validate)) {
            input.className="error";
        }

        else {
            input.removeAttribute('class')
        }
    }
}
