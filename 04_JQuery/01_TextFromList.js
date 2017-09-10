function extractText() {
    let text = [];
    let listItems = $('ul li').toArray()
        .forEach(e => text.push(e.textContent));

    $('div#result').text(text.join(', '));
}