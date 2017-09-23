function printDeckOfCards(cards) {
    let validCards = [];

    for (card of cards) {
        let face = card.substring(0, card.length - 1);
        let suit = card[card.length - 1];

        try {
            let newCard = makeCard(face, suit) + ""; //converted from object to string
            validCards.push(newCard);
        }

        catch (err) {
            console.log(err.message);
            return;
        }
    }

    console.log(validCards.join(' '));

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
            throw new Error(`Invalid card: ${face}${suit}`);
        }
    }
}

printDeckOfCards(['QS', '10D', 'KH', '2C']);