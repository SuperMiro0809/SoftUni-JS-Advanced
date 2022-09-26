(function () {
    let valid = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let Suits = {
        SPADES: "♠",
        HEARTS: "♥", 
        DIAMONDS: "♦", 
        CLUBS: "♣" 
    }

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        set face(newFace) {
            if(!valid.includes(newFace)) {
                throw new Error('Invalid');
            }else {
                this._face = newFace;
            }
        }

        set suit(newSuit) {
            if(Object.values(Suits).indexOf(newSuit) > -1) {
                this._suit = newSuit;
            }else {
                throw new Error('Invalid');
            }
        }

        get face() {
            return this._face;
        }

        get suit() {
            return this._suit;
        }
    }

    return { 
        Suits:Suits, 
        Card:Card 
    }
})()

let Card = result.Card;
let Suits = result.Suits;

let card = new Card("Q", Suits.CLUBS);
card.face = "A";
card.suit = Suits.DIAMONDS;
let card2 = new Card("1", Suits.DIAMONDS)