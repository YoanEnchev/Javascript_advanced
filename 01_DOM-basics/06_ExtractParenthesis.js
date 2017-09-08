function extract() {
    let id = document.getElementById('search').value;
    let text = document.getElementById(id).textContent;

    let patenthesis_regex = /\((.*[^()])\)/g;
    let matches = text.match(patenthesis_regex);

    let patenthesis = [];

    for (match of matches) {
        match = match.substring(1, match.length - 1); //removes brackets
        patenthesis.push(match);
    }

    let result = patenthesis.join('; ');
    document.getElementById('result').value = result;
    return result;
}