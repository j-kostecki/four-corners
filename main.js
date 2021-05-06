var squares;

var playerCoins = 0;
var houseCoins = 0;

var result;
var houseBanter;

window.onload = function() {
    reset()
}

function reset() {
    $(".dice").attr("disabled", false);
    playerCoins = 0;
    houseCoins = 0;
    squares = [0,1,0,1,0,-1,0,1,0,1];
}
function roll(elem, dice) {

    elem.disabled = true;

    let roll = Math.ceil(Math.random() * dice);

    document.getElementById("roll-result").innerText = "You rolled a " + roll.toString() + "!";

    result = squares[Math.min(roll, 8)]
    if (roll >= squares.length) {
        result = 2;
    }
    else {
        result = squares[Math.min(roll, 8)]
    }
    switch(result)
    {
        case -1:
            houseTakesCoin()
            break;
        case 0:
            playerPromptReRoll()
            break;
        case 1:
            playerTakesCoin(roll)
            break;
        case 2:
            playerTakesAnyCoin()
            break;
    }
    document.getElementById("house-banter").innerText = houseBanter;
}

function houseTakesCoin() {
    houseBanter = "Bad luck, friend...";
    houseCoins++;
}

function playerPromptReRoll() {
    houseBanter = "Care to roll again?";
}

function playerTakesCoin(roll) {
    squares[roll] = 0;
    playerCoins++;
    houseBanter = "Take a coin"
}

function playerTakesAnyCoin() {
    houseBanter = "Take any coin you like"
}
