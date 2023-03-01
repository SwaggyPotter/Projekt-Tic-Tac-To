let currentPlayer = 0;

let game = [null, null, null, null, null, null, null, null, null]

function add(c) {
    if (currentPlayer == 0) {
        if (game[c] === null) {
            document.getElementById(`field${c}`).style.backgroundImage = 'url("textures/circle.png")'
            game[c]
            currentPlayer++
        }
    }
    else if (currentPlayer == 1) {
        document.getElementById(`field${c}`).style.backgroundImage = 'url("textures/cross.png")'
        currentPlayer--
    }
}
