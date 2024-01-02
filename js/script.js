const currentScore = [document.querySelector('#currentScore1'), document.querySelector('#currentScore2')]
const globalScore = [document.querySelector('#globalScore1'), document.querySelector('#globalScore2')]
const ground = [document.querySelector('#ground1'), document.querySelector('#ground2')]
const playerPoint = [document.querySelector('#playerPoint1'), document.querySelector('#playerPoint2')]

//Class Player

class Player {
  round = false
  constructor(id, currentScore, globalScore) {
    this.id = id
    this.currentScore = currentScore
    this.globalScore = globalScore
  }

  displayCurrentScore() {
    currentScore[this.id - 1].innerText = this.currentScore
  }

  displayGlobalScore() {
    globalScore[this.id - 1].innerText = this.globalScore
  }
}

const player1 = new Player(1, 0, 0)
const player2 = new Player(2, 0, 0)

//Fonctions
function initGame() {
  player1.round = true
  player1.displayCurrentScore()
  player1.displayGlobalScore()
  player2.displayCurrentScore()
  player2.displayGlobalScore()
  ground[0].style.background = 'lightgray';
  playerPoint[0].style.display = 'inline-block';
  ground[1].style.background = '';
  playerPoint[1].style.display = '';
}

initGame()