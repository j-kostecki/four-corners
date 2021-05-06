var dice = [4,6,8,10,12]

var squares = [1,0,1,0,-1,0,1,0,1,2,2,2];

var boardresult;

window.onload = function() {

}

function roll(dice) {

    let roll = Math.ceil(Math.random() * dice);
    document.getElementById("roll-result").innerText
        = "You rolled a " + roll.toString() + "!";
    let output;
    boardresult = squares[Math.min(roll-1, 8)]
    switch(boardresult)
    {
        case -1:
            output = "bad luck, friend...";
            break;
        case 0:
            output = "roll again?"
            break;
        case 1:
            output = "take a coin"
            break;
        case 2:
            output = "take any coin!"
            break;
    }
    document.getElementById("board-result").innerText = output;

}
