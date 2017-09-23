function makeCard(face, suit) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuit = ['S', 'H', 'D', 'C'];

    if (validFaces.includes(face) && validSuit.includes(suit)) {
        let card = { face, suit };

        card.toString = function () {
            let suitToChar = {};
            suitToChar['S'] = '\u2660';
            suitToChar['H'] = '\u2665';
            suitToChar['D'] = '\u2666';
            suitToChar['C'] = '\u2663';

            let suitAsChar = suitToChar[suit];

            return `${face}${suitAsChar}`;
        }

        return card;
    }

    else {
        throw new Error('Invalid card');
    }
}
