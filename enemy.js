function Enemy (name, health, maxHealth, attack, type, skill) {
    this.name = name;
    this.health = health;
    this.maxHealth = maxHealth;
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
        8,
        2, 
        enemyType.ICE,
        function skill () {
            console.log("did something cool... lol.");
        }
    )
}

function displayEnemy(enemy) {
    $("#enemy-name").html(enemy.name);
    updateEnemyHealth(enemy);
}

function updateEnemyHealth(enemy) {
    $("#enemy-health-text").text(`Health: ${enemy.health}/${enemy.maxHealth}`);
    $("#enemy-health-bar").attr("style", `width: ${enemy.health / enemy.maxHealth * 100}%`);
}