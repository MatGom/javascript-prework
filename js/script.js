let playerWins = 0
let computerWins = 0
let gamesPlayed = 0
let playerWinrate = 0
let computerWinrate = 0
const rock = '<img src="images/rock_1.png">'
const paper = '<img src="images/paper_1.png">'
const scissors = '<img src="images/sci_1.png">'

function playGame(playerInput) {
	clearMessages()

	gamesPlayed++
	document.querySelector('.games-played').textContent = gamesPlayed

	let randomNumber = Math.floor(Math.random() * 3 + 1)
	let computerMove = getMoveName(randomNumber)
	let playerMove = getMoveName(playerInput)

	function getMoveName(argMoveId) {
		if (argMoveId == 1) {
			return rock
		} else if (argMoveId == 2) {
			return paper
		} else if (argMoveId == 3) {
			return scissors
		}
	}

	function displayResult(argComputerMove, argPlayerMove) {
		printMessage('Your move is')
		printMessage('My move is')
		printMessage(playerMove)
		printMessage(computerMove)

		if (
			(argComputerMove == rock && argPlayerMove == paper) ||
			(argComputerMove == paper && argPlayerMove == scissors) ||
			(argComputerMove == scissors && argPlayerMove == rock)
		) {
			printMessage('You win!')
			playerWins++
			calculateWinrate()
		} else if (argComputerMove == argPlayerMove) {
			printMessage('Draw!')
			calculateWinrate()
		} else {
			printMessage('You lose!')
			computerWins++
			calculateWinrate()
		}
	}

	displayResult(computerMove, playerMove)
}

document.getElementById('play-rock').addEventListener('click', function () {
	playGame(1)
})
document.getElementById('play-paper').addEventListener('click', function () {
	playGame(2)
})
document.getElementById('play-scissors').addEventListener('click', function () {
	playGame(3)
})
document.querySelector('.reset-btn').addEventListener('click', clearMessages)
document.querySelector('.info').addEventListener('click', showPopup)
document.querySelector('.close-info').addEventListener('click', closePopup)
