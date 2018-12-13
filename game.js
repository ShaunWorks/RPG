let cl = cardLibrary;
let player = {
    name: "Owen",
    maxHealth: 15,
    health: 15,
    handSize: 6,
    deck: [cl.slash, cl.slash, cl.sizzle, cl.sizzle, cl.frost, cl.frost, cl.douse, cl.douse],
    curDeck: [],

    shuffleAndFill: function () {
        let array = this.deck.slice(0);
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        this.curDeck = array;
    }
}

let game = {
    enemies: [],
    curEnemy: null,
    fillEnemies: function () {
        $.each(bestiary, function (key, value) {
            game.enemies.push(value);
        });
        console.log(this.enemies);
    },

    setEnemy: function (enemy) {
        this.curEnemy = enemy;
        displayEnemy(enemy);
        console.log(this.curEnemy);
    },

    log: function (msg) {
        console.log(msg);
    }
}

$(document).ready(function () {
    startGame();
});

function startGame() {
    game.fillEnemies();
    player.shuffleAndFill();

game.setEnemy(game.enemies[1]);

    $("#cardsInHand").on("click", ".card", function () {
        cl[$(this).attr("card-id")].effect();
        $(this).remove();
    });

    $("#draw").on("click", function () {
        if ($("#cardsInHand .card").length < player.handSize) {
            if (player.curDeck.length !== 0) {
                displayCard(player.curDeck.pop());
            }
            else {
                player.shuffleAndFill();
                displayCard(player.curDeck.pop());
            }
        }
    });

}