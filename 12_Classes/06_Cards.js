let defineCards = (function () {
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };

    const validSuits = Array.from(Object.keys(Suits).map(x => Suits[x]));
    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(face) {
            if (!validFaces.includes(face)) {
                throw new Error('Invalid face');
            }

            this._face = face;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            if (!validSuits.includes(suit)) {
                console.log(suit)
                console.log(validSuits);
                throw new Error('Invalid suit');
            }

            this._suit = suit;
        }

        toString() { return `${this.face}${this.suit}` };
    }

    return {
        Suits, Card
    }
})()