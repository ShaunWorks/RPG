function Card(name, desc, type, effect) {
    this.name = name;
    this.desc = desc;
    this.type = type;
    this.effect = effect;
}

let cardType = {
    ATTACK: 1,
    SKILL: 2,
    STATUS: 3,
}

slash = new Card(
    "Name",
    "Deal 6 damage to the enemy",
    cardType.ATTACK,
    function effect() {
        console.log("dealt 6 damage");
    },
)