const currentScore = [document.querySelector('#currentScore1'), document.querySelector('#currentScore2')]
const globalScore = [document.querySelector('#globalScore1'), document.querySelector('#globalScore2')]
const ground = [document.querySelector('#ground1'), document.querySelector('#ground2')]
const playerPoint = [document.querySelector('#playerPoint1'), document.querySelector('#playerPoint2')]
const rollDiceButton = document.querySelector('#rollDice')
const holdButton = document.querySelector('#hold')
const newGameButton = document.querySelector('#newGame')
const modalTitle = document.querySelector('#modalTitle')
const closeModalButton = document.querySelector('#closeModal')

let diceValue = 0
let currentPlayer = 1

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

  addCurrentScore(diceValue) {
    this.currentScore += diceValue
  }

  addGlobalScore() {
    this.globalScore += this.currentScore
    this.currentScore = 0
  }

  congratulation() {
    modal?.classList.add('modal-open')
    modalTitle.innerText = 'Bravo Player' + this.id
  }
}

//Création des joueurs
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

//Changement de joueur
function chgPlayer() {
  if (player1.round) {
    player1.round = false
    player2.round = true
    ground[1].style.background = 'lightgray';
    playerPoint[1].style.display = 'inline-block';
    ground[0].style.background = '';
    playerPoint[0].style.display = '';
  } else {
    player1.round = true
    player2.round = false
    ground[0].style.background = 'lightgray';
    playerPoint[0].style.display = 'inline-block';
    ground[1].style.background = '';
    playerPoint[1].style.display = '';
  }
}

// Lancer le dé
function rollDice() {
  diceValue = Math.floor(Math.random() * 6) + 1
  return diceValue
}

// Nouveau jeu
function newGame() {
  player1.currentScore = player1.globalScore = 0
  player2.currentScore = player2.globalScore = 0
  initGame()
}

// Fermer la modal
function closeModal() {
  modal?.classList.remove('modal-open')
  newGame()
}

// ##### Jeu #####

//Initialisation du jeu
initGame()

//Déroulement du jeu
rollDiceButton.addEventListener('click', () => {
  rollDice()
  if (player1.round) {
    if (diceValue === 1) {
      player1.currentScore = 0
      player1.displayCurrentScore()
      chgPlayer()
    } else {
      player1.addCurrentScore(diceValue)
      player1.displayCurrentScore()
    }
  } else {
    if (diceValue === 1) {
      player2.currentScore = 0
      player2.displayCurrentScore()
      chgPlayer()
    } else {
      player2.addCurrentScore(diceValue)
      player2.displayCurrentScore()
    }
  }
})

//Enregistrement score global
holdButton.addEventListener('click', () => {
  if (player1.round) {
    player1.addGlobalScore()
    player1.displayGlobalScore()
    if (player1.globalScore >= 20) {
      player1.congratulation()
    }
    player1.displayCurrentScore()
    chgPlayer()
  } else {
    player2.addGlobalScore()
    player2.displayGlobalScore()
    if (player2.globalScore >= 20) {
      player2.congratulation()
    }
    player2.displayCurrentScore()
    chgPlayer()
  }
})

// Remise à zéro (nouveau jeu)
newGameButton.addEventListener('click', () => newGame())

