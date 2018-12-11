let player = {
    name: "Owen",
    maxHealth: 15,
    health: 15,
    handSize: 6
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