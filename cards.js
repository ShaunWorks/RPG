function Card(name, desc, cost, type, element, effect) {
    this.name = name;
    this.desc = desc;
    this.cost = cost;
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
    ICE: 4,

    properties: {
        1: { icon: "fas fa-circle", color: "grey" },
        2: { icon: "fas fa-fire", color: "red" },
        3: { icon: "fas fa-tint", color: "blue" },
        4: { icon: "fas fa-snowflake", color: "skyblue" }
    }
}

let cardLibrary = {
    slash: new Card(
        "Slash",
        "Deal 5 damage to the enemy",
        1,
        cardType.ATTACK,
        cardElement.NEUTRAL,
        function effect() {
            game.damageCalc(5, this.element);
        }
    ),

    sizzle: new Card(
        "Sizzle",
        "Deal 4 fire damage to the enemy",
        1,
        cardType.ATTACK,
        cardElement.FIRE,
        function effect() {
            game.damageCalc(4, this.element);
        }
    ),

    douse: new Card(
        "Douse",
        "Deal 4 water damage to the enemy",
        1,
        cardType.ATTACK,
        cardElement.WATER,
        function effect() {
            game.damageCalc(4, this.element);
        }
    ),

    frost: new Card(
        "Frost",
        "Deal 4 ice damage to the enemy",
        1,
        cardType.ATTACK,
        cardElement.ICE,
        function effect() {
            game.damageCalc(4, this.element);
        }
    ),

    heal: new Card(
        "Heal",
        "Recover 3 health",
        1,
        cardType.SKILL,
        cardElement.NEUTRAL,
        function effect() {
            player.health += 3;
            if(player.health > player.maxHealth)
                player.health = player.maxHealth;
            player.updatePlayerHealth();
            game.log("Player healed 3 health");
        }
    ),
}

function displayCard(card) {
    let c =
        `<div class="card m-0" card-id='${card.name.toLowerCase()}' style="width:120px;" data-toggle="tooltip" data-placement="top" title="${card.desc}">
        <img class="card-img-top" src="https://via.placeholder.com/120x70" alt="Card image cap">
        <div class="card-body p-0">
            <p class="card-title text-center m-0">${card.name}</p>
            <hr class="mx-2 my-0">
            <div class="d-flex align-items-center justify-content-around mx-4">
                <i class="${cardElement.properties[card.element].icon}" style="font-size:20px; color:${cardElement.properties[card.element].color}"></i>
                <p class="card-text text-center" style="font-size:20px;">1</p>
            </div>
        </div>
    </div>`;
    $(c).tooltip();  
    $("#cardsInHand").append(c);
}


