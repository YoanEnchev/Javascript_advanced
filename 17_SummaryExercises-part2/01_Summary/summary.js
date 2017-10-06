function addEventTo(selector) {
    $(selector).click(summary);

    function summary() {
        let content = $('#content strong').text();
        let summary = $('<div id="summary">')
            .append('<h2>Summary<h2>')
            .append(`<p>${content}</p>`);

        $($(`#content`).parent()).append(summary);
    }
}
