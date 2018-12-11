function Card(name, desc, type, element, effect) {
    this.name = name;
    this.desc = desc;
    this.type = type;
    this.element = element;
    this.effect = effect;
}

let cardType = {
    ATTACK: 1,
    SKILL: 2,
    STATUS: 3
}

let cardElement = {
    NEUTRAL: 1,
    FIRE: 2,
    WATER: 3,
    ICE: 4
}

let cardLibrary = {
    slash: new Card(
        "Slash",
        "Deal 5 damage to the enemy",
        cardType.ATTACK,
        cardElement.NEUTRAL,
        function effect() {
            console.log("dealt 5 damage");
        }
    ),

    sizzle: new Card(
        "Sizzle",
        "Deal 4 fire damage to the enemy",
        cardType.ATTACK,
        cardElement.FIRE,
        function effect() {
            console.log("dealt 4 fire damage");
        }
    ),

    douse: new Card(
        "Douse",
        "Deal 4 water damage to the enemy",
        cardType.ATTACK,
        cardElement.WATER,
        function effect() {
            console.log("dealt 4 water damage");
        }
    ),

    frost: new Card(
        "Frost",
        "Deal 4 ice damage to the enemy",
        cardType.ATTACK,
        cardElement.ICE,
        function effect() {
            console.log("dealt 4 ice damage");
        }
    ),

    heal: new Card(
        "Heal",
        "Recover 3 health",
        cardType.SKILL,
        cardElement.NEUTRAL,
        function effect() {
            player.health += 3;
            game.log("Player healed 3 damaged");
        }
    ),
    
    counter: new Card(
        "Counter",
        "Block a neutral attack deal 4 damage",
        cardType.STATUS,
        cardElement.NEUTRAL,
        function effect() {
            console.log("");
        }
    ),

}

cardLibrary.heal.effect();