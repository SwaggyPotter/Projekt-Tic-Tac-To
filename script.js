let currentPlayer = 0;
let game = [null, null, null, null, null, null, null, null, null]
let startButton = document.getElementById('startButton')
let nameInputOne = document.getElementById('nameInput1')
let nameInputTwo = document.getElementById('nameInput2')
let backgroundAudio = document.getElementById('audioSound')
backgroundAudio.volume = 0.1


function add(c) {
    if (currentPlayer == 0) {
        if (game[c] === null) {
            document.getElementById(`field${c}`).style.backgroundImage = 'url("textures/circle.png")'
            game[c] = 0;
            currentPlayer++
            checkForWinCircle()
            showCurrentPlayer();
            let audio = new Audio('sounds/click.mp3');
            audio.volume = 0.1
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
            audio.volume = 0.1
            audio.play();
        }
    }
}


function checkForWinCircle() {
    if (game[0] == 0 && game[1] == 0 && game[2] == 0) {
        endGameCircle();
        topLineAcrossAnimation()
    }
    else if (game[0] == 0 && game[3] == 0 && game[6] == 0) {
        endGameCircle();
        upRightDownAnimation();
    }
    else if (game[1] == 0 && game[4] == 0 && game[7] == 0) {
        endGameCircle();
        lineAnimationMid();
    }
    else if (game[2] == 0 && game[5] == 0 && game[8] == 0) {
        endGameCircle();
        upRightDownAnimation2();
    }
    else if (game[3] == 0 && game[4] == 0 && game[5] == 0) {
        endGameCircle();
        lineAnimationMid2()
    }
    else if (game[6] == 0 && game[7] == 0 && game[8] == 0) {
        endGameCircle();
        lastLineAcrossAnimation()
    }
    else if (game[0] == 0 && game[4] == 0 && game[8] == 0) {
        endGameCircle();
        lineAnimationObliqueLineLeftRight()
    }
    else if (game[2] == 0 && game[4] == 0 && game[6] == 0) {
        endGameCircle();
        lineAnimationObliqueLineRightLeft()
    }
}


function checkForWinCross() {
    if (game[0] == 1 && game[1] == 1 && game[2] == 1) {
        endGameCross();
        topLineAcrossAnimation()
    }
    else if (game[3] == 1 && game[4] == 1 && game[5] == 1) {
        endGameCross();
        lineAnimationMid2()
    }
    else if (game[0] == 1 && game[3] == 1 && game[6] == 1) {
        endGameCross();
        upRightDownAnimation();
    }
    else if (game[1] == 1 && game[4] == 1 && game[7] == 1) {
        endGameCross();
        lineAnimationMid();
    }
    else if (game[2] == 1 && game[5] == 1 && game[8] == 1) {
        endGameCross();
        upRightDownAnimation2();
    }
    else if (game[6] == 1 && game[7] == 1 && game[8] == 1) {
        endGameCross();
        lastLineAcrossAnimation()
    }
    else if (game[0] == 1 && game[4] == 1 && game[8] == 1) {
        endGameCross();
        lineAnimationObliqueLineLeftRight()
    }
    else if (game[2] == 1 && game[4] == 1 && game[6] == 1) {
        endGameCross();
        lineAnimationObliqueLineRightLeft()
    }
}


function endGameCircle() {
    setTimeout(() => {
        document.getElementById('windowBlack').classList.add('windowBlack')
        setTimeout(() => {
            document.getElementById('gameOverScreen').style.display = 'flex';
            document.getElementById('playerWinnerName').innerText = nameInputOne.value;
            document.getElementById('audioSound').src = 'sounds/end-music.mp3';
        }, 1000)
        setTimeout(() => {
            document.getElementById('windowBlack').classList.remove('windowBlack')
        }, 2000)
    }, 2000)
}


function endGameCross() {
    setTimeout(() => {
        document.getElementById('windowBlack').classList.add('windowBlack')
        setTimeout(() => {
            document.getElementById('gameOverScreen').style.display = 'flex';
            document.getElementById('playerWinnerName').innerText = nameInputTwo.value;
            document.getElementById('audioSound').src = 'sounds/end-music.mp3';
        }, 1000)
        setTimeout(() => {
            document.getElementById('windowBlack').classList.remove('windowBlack')
        }, 2000)
    }, 2000)
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
    var audio = new Audio('sounds/buttonSound.mp3');
    audio.volume = 0.1
    audio.play();
    document.getElementById('windowBlackEnd').classList.add('windowBlackEnd')
    setTimeout(() => {
        location.reload();
    }, 2000)
}


startButton.addEventListener('click', () => {
    var audio = new Audio('sounds/buttonSound.mp3');
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
    document.getElementById('hrMid').classList.add('lineAcrossAnimationClass')
    document.getElementById('hrMid').style.display = 'inline';
    document.getElementById('hrMid').style.top = '-90px';
    setTimeout(() => {
        document.getElementById('hrMid').style.width = '400px'
    }, 800)
}


function lastLineAcrossAnimation() {
    document.getElementById('hrMid').classList.add('lineAcrossAnimationClass')
    document.getElementById('hrMid').style.display = 'inline';
    document.getElementById('hrMid').style.top = '230px';
    setTimeout(() => {
        document.getElementById('hrMid').style.width = '400px'
    }, 800)
}


function upRightDownAnimation() {
    document.getElementById('hrMid').classList.add('uprightAnimation')
    document.getElementById('hrMid').style.display = 'inline';
    document.getElementById('hrMid').style.left = '-90px';
    setTimeout(() => {
        document.getElementById('hrMid').style.height = '400px'
    }, 800)
}


function upRightDownAnimation2() {
    document.getElementById('hrMid').classList.add('uprightAnimation')
    document.getElementById('hrMid').style.display = 'inline';
    document.getElementById('hrMid').style.left = '240px';
    setTimeout(() => {
        document.getElementById('hrMid').style.height = '400px'
    }, 800)
}