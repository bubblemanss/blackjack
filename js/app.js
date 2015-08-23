var deck = require("./deck.json");

function deal(){
    var inDeck = false;

    while(!inDeck){
        var card = Math.floor(Math.random()*52);
        var value = getCard(card);
        var suit = getSuit(card);
        if(deck[value][suit] == 1){
            deck[value][suit]--;
            inDeck = true;
        }
    }
    return card;
}

var card1, card2;

function getCard(card){
    if(card%13 == 0){
        return "King";
    }
    else if(card%13 == 12){
        return "Queen";
    }
    else if(card%13 == 11){
        return "Jack";
    }
    else if(card%13 == 1){
        return "Ace";
    }
    else{
        return card%13+"";
    }
}

function getSuit(card){
    var suit = Math.floor(card/13);
    if(suit == 0){
        return "Diamonds";
    }
    else if(suit == 1){
        return "Clubs";
    }
    else if(suit == 2){
        return "Hearts";
    }
    else{
        return "Spades";
    }
}

function getValue(card){
    if(card%13 == 0 || card%13 == 11 || card%13 == 12){
        return 10;
    }
    else if(card%13 == 1){
        return 11;
    }
    else{
        return card%13;
    }
}

function score(){
    return getValue(card1) + getValue(card2);
}

for(var i = 0; i < 26; i++){
    console.log(i);
    card1 = deal();
    card2 = deal();
    console.log("Card 1: " + getCard(card1) +" of "+ getSuit(card1) + "\nCard 2: " + getCard(card2) +" of "+ getSuit(card2)+ "\nScore: " + score());
}
