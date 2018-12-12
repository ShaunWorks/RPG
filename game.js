let cl = cardLibrary;
let player = {
    name: "Owen",
    maxHealth: 15,
    health: 15,
    handSize: 6,
    deck: [cl.slash, cl.slash, cl.sizzle, cl.sizzle, cl.frost, cl.frost, cl.douse, cl.douse],
    curDeck: [],

    fillDeck: function () {
        this.curDeck = this.deck;
    }
}



let game = {
    lowLevelEnemies: [],
    midLevelEnemies: [],
    highLevelEnemies: [],
    curEnemy: null,

    setEnemy: function(enemy) {
        this.curEnemy = enemy;
        console.log(this.curEnemy);
    },

    log: function(msg) {
        console.log(msg);
    }
}

//console.log(game.curEnemy);