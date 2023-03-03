let currentPlayer = 0;
let game = [null, null, null, null, null, null, null, null, null]
let startButton = document.getElementById('startButton')
let nameInputOne = document.getElementById('nameInput1')
let nameInputTwo = document.getElementById('nameInput2')



function add(c) {
    if (currentPlayer == 0) {
        if (game[c] === null) {
            document.getElementById(`field${c}`).style.backgroundImage = 'url("textures/circle.png")'
            game[c] = 0;
            currentPlayer++
            checkForWinCircle()
            showCurrentPlayer();
            let audio = new Audio('sounds/click.mp3');
            audio.play();
        }
    }
    else if (currentPlayer == 1) {
        if (game[c] === null) {
            document.getElementById(`field${c}`).style.backgroundImage = 'url("textures/cross.png")'
            game[c] = 1;
            currentPlayer--
            checkForWinCross();
            showCurrentPlayer()
            let audio = new Audio('sounds/click.mp3');
            audio.play();
        }
    }
}


function checkForWinCircle() {
    if (game[0] == 0 && game[1] == 0 && game[2] == 0) {
        endGameCircle();
    }
    else if (game[0] == 0 && game[3] == 0 && game[6] == 0) {
        endGameCircle();
    }
    else if (game[1] == 0 && game[4] == 0 && game[7] == 0) {
        endGameCircle();
    }
    else if (game[2] == 0 && game[5] == 0 && game[8] == 0) {
        endGameCircle();
    }
    else if (game[3] == 0 && game[4] == 0 && game[5] == 0) {
        endGameCircle();
    }
    else if (game[6] == 0 && game[7] == 0 && game[8] == 0) {
        endGameCircle();
    }
    else if (game[0] == 0 && game[4] == 0 && game[8] == 0) {
        endGameCircle();
    }
    else if (game[2] == 0 && game[4] == 0 && game[6] == 0) {
        endGameCircle();
    }
}


function checkForWinCross() {
    if (game[0] == 1 && game[1] == 1 && game[2] == 1) {
        endGameCross();
    }
    else if (game[3] == 1 && game[4] == 1 && game[5] == 1) {
        endGameCross();
    }
    else if (game[0] == 1 && game[3] == 1 && game[6] == 1) {
        endGameCross();
    }
    else if (game[1] == 1 && game[4] == 1 && game[7] == 1) {
        endGameCross();
    }
    else if (game[2] == 1 && game[5] == 1 && game[8] == 1) {
        endGameCross();
    }
    else if (game[6] == 1 && game[7] == 1 && game[8] == 1) {
        endGameCross();
    }
    else if (game[0] == 1 && game[4] == 1 && game[8] == 1) {
        endGameCross();
    }
    else if (game[2] == 1 && game[4] == 1 && game[6] == 1) {
        endGameCross();
    }
}


function endGameCircle() {
    setTimeout(() => {
        document.getElementById('gameOverScreen').style.display = 'flex';
        document.getElementById('playerWinnerName').innerText = nameInputOne.value;
    }, 1000)

}


function endGameCross() {
    setTimeout(() => {
        document.getElementById('gameOverScreen').style.display = 'flex';
        document.getElementById('playerWinnerName').innerText = nameInputTwo.value;
    }, 1000)


}


function showCurrentPlayer() {
    if (currentPlayer == 0) {
        document.getElementById('player1Name').style.backgroundColor = 'rgb(255, 0, 212)';
        document.getElementById('player2Name').style.backgroundColor = 'gray';
    }
    else if (currentPlayer == 1) {
        document.getElementById('player2Name').style.backgroundColor = 'rgb(255, 0, 212)';
        document.getElementById('player1Name').style.backgroundColor = 'gray';
    }

}

function restart() {
    location.reload();
}


startButton.addEventListener('click', () => {
    document.getElementById('player1Name').innerText = nameInputOne.value;
    document.getElementById('player2Name').innerText = nameInputTwo.value;
    document.getElementById('startContainer').style.display = 'none';
    document.getElementById('audioSound').src = 'sounds/soft-rain.mp3'
})

