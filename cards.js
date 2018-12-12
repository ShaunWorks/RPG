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
    ICE: 4,

    properties: {
        1: { icon: "fas fa-snowflake", color: "skyblue" },
        2: { icon: "fas fa-snowflake", color: "skyblue" },
        3: { icon: "fas fa-snowflake", color: "skyblue" },
        4: { icon: "fas fa-snowflake", color: "skyblue" }
    }
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

let curCard = cardLibrary.frost;
console.log(cardElement.properties[curCard.element]);

$(document).ready(function () {
    $("#cardsInHand").on("click", ".card", function () {
        console.log("this is a card");
    });

    $("#draw").on("click", function () {
        displayCard(player.deck[0]);
    });

    for (let i = 0; i < 6; i++) {
        displayCard(player.deck[i]);
    }
});

function displayCard(card) {
    let c =
        `<div class="card m-0" style="width:120px;">
        <img class="card-img-top" src="https://via.placeholder.com/120x70" alt="Card image cap">
        <div class="card-body p-0">
            <p class="card-title text-center m-0">${card.name}</p>
            <hr class="mx-2 my-0">
            <div class="d-flex align-items-center justify-content-around mx-4">
                <i class="${cardElement.properties[card.element].icon}" style="font-size:20px; color:${cardElement.properties[card.element].color}"></i>
                <p class="card-text text-center" style="font-size:20px;">3</p>
            </div>
        </div>
    </div>`;
    console.log(c);
    $("#cardsInHand").append(c);
}


