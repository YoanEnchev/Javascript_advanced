function attachEvents() {
    let buttons = $("a.button")
    buttons.click(buttonClicked);

    function buttonClicked() {
        buttons.removeClass("selected");
        $(this).addClass("selected");
    }
}
