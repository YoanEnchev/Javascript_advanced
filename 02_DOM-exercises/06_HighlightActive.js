function focus() {
    let inputs = document.getElementsByTagName('input');

    for (input of inputs) {
        input.addEventListener('focus', highlight);
        input.addEventListener('blur', noEffect);
    }

    function highlight() {
        let section = this.parentNode.className = "focused";
    }

    function noEffect() {
        let section = this.parentNode.className = "";
    }
}