function Enemy (name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
}

let unibat = new Enemy (
    "Unibat", 8, 2
)

game.setEnemy(unibat);