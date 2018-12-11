function Enemy (name, health, attack, type, skill) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.type = type;
    this.skill = skill;
}

let enemyType = {
    NEUTRAL: 1,
    FIRE: 2,
    WATER: 3,
    ICE: 4
}

let bestiary = {
    unibat: new Enemy (
        "Unibat", 
        8, 
        2, 
        enemyType.NEUTRAL,
        function skill () {
            console.log("did something cool");
        }
    ),

    sirFrosty: new Enemy (
        "Sir Frosty", 
        8, 
        2, 
        enemyType.ICE,
        function skill () {
            console.log("did something cool... lol.");
        }
    )
}

//game.setEnemy(unibat);