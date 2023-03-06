let currentPlayer = 0;
let game = [null, null, null, null, null, null, null, null, null]
let startButton = document.getElementById('startButton')
let nameInputOne = document.getElementById('nameInput1')
let nameInputTwo = document.getElementById('nameInput2')
let winner = '';
let backgroundAudio = document.getElementById('audioSound')
let volumeOn = document.getElementById('volumeOn')
let volumeOff = document.getElementById('volumeOff')
backgroundAudio.volume = 0.1
let audio = new Audio('sounds/click.mp3');
audio.volume = 0.1
let undecideCounter = 9;
let winnerCheck = false


volumeOn.addEventListener('click', () => {
    volumeOn.style.display = 'none';
    volumeOff.style.display = 'flex';
    backgroundAudio.volume = 0
    audio.volume = 0
})
volumeOff.addEventListener('click', () => {
    volumeOn.style.display = 'flex';
    volumeOff.style.display = 'none';
    backgroundAudio.volume = 0.1
    audio.volume = 0.1
})


function add(c) {
    if (currentPlayer == 0) {
        if (game[c] === null) {
            document.getElementById(`field${c}`).style.backgroundImage = 'url("textures/circle.png")'
            game[c] = 0;
            currentPlayer++
            winner = nameInputOne.value
            checkForWinCircle()
            showCurrentPlayer();
            undecideCounter--
            undecided()
            audio.play();
        }
    }
    else if (currentPlayer == 1) {
        if (game[c] === null) {
            document.getElementById(`field${c}`).style.backgroundImage = 'url("textures/cross.png")'
            game[c] = 1;
            currentPlayer--
            winner = nameInputTwo.value;
            checkForWinCross();
            showCurrentPlayer()
            undecideCounter--
            undecided()
            audio.play();
        }
    }
}


function checkForWinCircle() {

    if (game[0] == 0 && game[1] == 0 && game[2] == 0) {
        endGame()
        topLineAcrossAnimation()
    }
    else if (game[0] == 0 && game[3] == 0 && game[6] == 0) {
        endGame()
        upRightDownAnimation();
    }
    else if (game[1] == 0 && game[4] == 0 && game[7] == 0) {
        endGame()
        lineAnimationMid();
    }
    else if (game[2] == 0 && game[5] == 0 && game[8] == 0) {
        endGame()
        upRightDownAnimation2();
    }
    else if (game[3] == 0 && game[4] == 0 && game[5] == 0) {
        endGame()
        lineAnimationMid2()
    }
    else if (game[6] == 0 && game[7] == 0 && game[8] == 0) {
        endGame()
        lastLineAcrossAnimation()
    }
    else if (game[0] == 0 && game[4] == 0 && game[8] == 0) {
        endGame()
        lineAnimationObliqueLineLeftRight()
    }
    else if (game[2] == 0 && game[4] == 0 && game[6] == 0) {
        endGame()
        lineAnimationObliqueLineRightLeft()
    }

}


function checkForWinCross() {
    if (game[0] == 1 && game[1] == 1 && game[2] == 1) {
        endGame()
        topLineAcrossAnimation()
    }
    else if (game[3] == 1 && game[4] == 1 && game[5] == 1) {
        endGame()
        lineAnimationMid2()
    }
    else if (game[0] == 1 && game[3] == 1 && game[6] == 1) {
        endGame()
        upRightDownAnimation();
    }
    else if (game[1] == 1 && game[4] == 1 && game[7] == 1) {
        endGame()
        lineAnimationMid();
    }
    else if (game[2] == 1 && game[5] == 1 && game[8] == 1) {
        endGame()
        upRightDownAnimation2();
    }
    else if (game[6] == 1 && game[7] == 1 && game[8] == 1) {
        endGame()
        lastLineAcrossAnimation()
    }
    else if (game[0] == 1 && game[4] == 1 && game[8] == 1) {
        endGame()
        lineAnimationObliqueLineLeftRight()
    }
    else if (game[2] == 1 && game[4] == 1 && game[6] == 1) {
        endGame()
        lineAnimationObliqueLineRightLeft()
    }
}


function endGame() {
    winnerCheck = true;
    setTimeout(() => {
        document.getElementById('windowBlack').classList.add('windowBlack')
        setTimeout(() => {
            document.getElementById('gameOverScreen').style.display = 'flex';
            document.getElementById('playerWinnerName').innerText = winner;
            document.getElementById('audioSound').src = 'sounds/end-music.mp3';
        }, 1000)
        setTimeout(() => {
            document.getElementById('windowBlack').classList.remove('windowBlack')
        }, 2000)
    }, 2000)
    stopgame()
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


function stopgame() {
    for (i = 0; i < game.length; i++) {
        document.getElementById(`field${i}`).onclick = '';
    }
}


function restart() {
    let audio = new Audio('sounds/buttonSound.mp3');
    audio.volume = 0.1
    audio.play();
    document.getElementById('windowBlackEnd').classList.add('windowBlackEnd')
    setTimeout(() => {
        location.reload();
    }, 2000)
}


function undecided() {
    if (undecideCounter == 0 && winnerCheck == false) {
        winner = 'No one';
        endGame();
    }
}


startButton.addEventListener('click', () => {
    let audio = new Audio('sounds/buttonSound.mp3');
    audio.volume = 0.1
    audio.play();
    document.getElementById('windowBlack').classList.add('windowBlack')
    setTimeout(() => {
        document.getElementById('player1Name').innerText = nameInputOne.value;
        document.getElementById('player2Name').innerText = nameInputTwo.value;
        document.getElementById('startContainer').style.display = 'none';
        document.getElementById('audioSound').src = 'sounds/soft-rain.mp3'
    }, 1000)
    setTimeout(() => {
        document.getElementById('windowBlack').classList.remove('windowBlack')
    }, 2000)
})

// end game line animation add

function lineAnimationMid() {
    document.getElementById('hrMid').classList.add('MidAnimationClass')
    document.getElementById('hrMid').style.display = 'inline';
    setTimeout(() => {
        document.getElementById('hrMid').style.height = '400px'
    }, 800)
}


function lineAnimationMid2() {
    document.getElementById('hrMid').classList.add('MidAnimationClass')
    document.getElementById('hrMid').style.display = 'inline';
    document.getElementById('hrMid').style.rotate = '90deg';
    setTimeout(() => {
        document.getElementById('hrMid').style.height = '400px'
    }, 800)
}


function lineAnimationObliqueLineLeftRight() {
    document.getElementById('hrMid').classList.add('MidAnimationClass')
    document.getElementById('hrMid').style.rotate = '135deg';
    document.getElementById('hrMid').style.display = 'inline';
    setTimeout(() => {
        document.getElementById('hrMid').style.height = '400px'
    }, 800)
}


function lineAnimationObliqueLineRightLeft() {
    document.getElementById('hrMid').classList.add('MidAnimationClass')
    document.getElementById('hrMid').style.rotate = '45deg';
    document.getElementById('hrMid').style.display = 'inline';
    setTimeout(() => {
        document.getElementById('hrMid').style.height = '400px'
    }, 800)
}


function topLineAcrossAnimation() {
    if (window.innerWidth > 500) {
        document.getElementById('hrMid').style.top = '-90px';
    }
    else if (window.innerWidth < 500 && window.innerWidth > 400) {
        document.getElementById('hrMid').style.top = '-70px';
    }
    else if (window.innerWidth < 400) {
        document.getElementById('hrMid').style.top = '-60px';
    }
    document.getElementById('hrMid').classList.add('lineAcrossAnimationClass')
    document.getElementById('hrMid').style.display = 'inline';
    setTimeout(() => {
        document.getElementById('hrMid').style.width = '400px'
    }, 800)
}


function lastLineAcrossAnimation() {
    if (window.innerWidth > 500) {
        document.getElementById('hrMid').style.top = '230px';
    }
    else if (window.innerWidth < 500 && window.innerWidth > 400) {
        document.getElementById('hrMid').style.top = '170px';
    }
    else if (window.innerWidth < 400) {
        document.getElementById('hrMid').style.top = '140px';
    }
    document.getElementById('hrMid').classList.add('lineAcrossAnimationClass')
    document.getElementById('hrMid').style.display = 'inline';

    setTimeout(() => {
        document.getElementById('hrMid').style.width = '400px'
    }, 800)
}


function upRightDownAnimation() {
    if (window.innerWidth > 500) {
        document.getElementById('hrMid').style.left = '-90px';
    }
    else if (window.innerWidth < 500 && window.innerWidth > 400) {
        document.getElementById('hrMid').style.left = '-65px';
    }
    else if (window.innerWidth < 400) {
        document.getElementById('hrMid').style.left = '-55px';
    }
    document.getElementById('hrMid').classList.add('uprightAnimation')
    document.getElementById('hrMid').style.display = 'inline';
    setTimeout(() => {
        document.getElementById('hrMid').style.height = '400px'
    }, 800)
}


function upRightDownAnimation2() {
    if (window.innerWidth > 500) {
        document.getElementById('hrMid').style.left = '240px';
    }
    else if (window.innerWidth < 500 && window.innerWidth > 400) {
        document.getElementById('hrMid').style.left = '180px';
    }
    else if (window.innerWidth < 400) {
        document.getElementById('hrMid').style.left = '150px';
    }
    document.getElementById('hrMid').classList.add('uprightAnimation')
    document.getElementById('hrMid').style.display = 'inline';

    setTimeout(() => {
        document.getElementById('hrMid').style.height = '400px'
    }, 800)
}


