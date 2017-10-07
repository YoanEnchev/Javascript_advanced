function cardDeckBuilder(selector) {
    let suitToChar = {
        C: '\u2663', //♣
        D: '\u2666', //♦
        H: '\u2665', //♥
        S: '\u2660'  //♠
    };
    function addCard(face, suit) {
        let suitAsChar = suitToChar[suit];

        let newCard = $('<div>')
            .addClass('card')
            .text(`${face} ${suitAsChar}`)
            .click(reverse);

        $(selector).append(newCard);
    }

    function reverse() {
        $(selector).children().each((i,card) => $(selector).prepend(card));
    }

    return {addCard};
}

