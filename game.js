let cl = cardLibrary;
let player = {
    name: "Owen",
    maxHealth: 15,
    health: 15,
    handSize: 6,
    deck: [cl.slash, cl.slash, cl.sizzle, cl.sizzle, cl.frost, cl.frost, cl.douse, cl.douse, cl.heal, cl.heal],
    curDeck: [],
    maxEnergy: 4,
    energy: 4,

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
    },

    draw: function () {
        if ($("#cardsInHand .card").length < player.handSize) {
            if (player.curDeck.length !== 0) {
                displayCard(player.curDeck.pop());
            }
            else {
                player.shuffleAndFill();
                displayCard(player.curDeck.pop());
            }
        }
    },

    updatePlayerHealth: function () {
        $("#player-health-text").text(`Health: ${this.health}/${this.maxHealth}`);
        $("#player-health-bar").attr("style", `width: ${this.health / this.maxHealth * 100}%`);
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
    },

    damageCalc: function (strength, element) {
        let damage = strength * this.weaknessCalc(element);
        this.curEnemy.health -= damage;
        if(this.curEnemy.health < 0)
            this.curEnemy.health = 0;
        updateEnemyHealth(this.curEnemy);
        this.log(`Player dealt ${damage} damage to ${this.curEnemy.name}`);
    },

    weaknessCalc: function (element) {
        switch (element) {
            case 1:
                return 1;
            case 2:
                switch (game.curEnemy.type) {
                    case 3:
                        return 0.5;
                    case 4:
                        return 1.5;
                    default:
                        return 1;
                }
            case 3:
                switch (game.curEnemy.type) {
                    case 4:
                        return 0.5;
                    case 2:
                        return 1.5;
                    default:
                        return 1;
                }
            case 4:
                switch (game.curEnemy.type) {
                    case 2:
                        return 0.5;
                    case 3:
                        return 1.5;
                    default:
                        return 1;
                }
            default:
                console.log("problem, chief");
                break;
        }
    },

    log: function (msg) {
        $("#game-log").prepend(`<p>${msg}</p>`);
    },

    endTurn: function () {
        player.health -= game.curEnemy.attack;
        player.updatePlayerHealth();
    }
}

$(document).ready(function () {
    startGame();
    $("body").tooltip({
        selector: '[data-toggle="tooltip"]'
    });
});


function startGame() {
    game.fillEnemies();
    player.shuffleAndFill();
    player.updatePlayerHealth();
    game.setEnemy(game.enemies[0]);

    $("#cardsInHand").on("click", ".card", function () {
        if (player.energy > 0) {
            cl[$(this).attr("card-id")].effect();
            $(this).tooltip('dispose');
            $(this).remove();
            player.energy--;
            $("#player-energy").text(`Energy: ${player.energy}/${player.maxEnergy}`);
        }
    });

    $("#draw").on("click", player.draw);
    $("#end-turn").on("click", game.endTurn);

}