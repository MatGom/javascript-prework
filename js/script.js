let playerWins = 0
let computerWins = 0
let gamesPlayed = 0
let playerWinrate = 0
let computerWinrate = 0
let rock = '<img src="images/rock_left_1.png">'
let paper = '<img src="images/paper_left_1.png">'
let scissors = '<img src="images/sci_left_1.png">'

function playGame(playerInput) {
	clearMessages()
	document.getElementById('messages').style.opacity = '1'

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

	document.querySelector('h3').style.display = 'none'

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
document.querySelector('.reset-btn').addEventListener('click', resetStats)
document.querySelector('.info').addEventListener('click', showPopup)
document.querySelector('.close-info').addEventListener('click', closePopup)

// if (computerMove == rock && playerMove == paper) {
// 	rock = '<img src="images/rock_paper_left.png">'
// 	paper = '<img src="images/paper_rock_right.png">'
// } else if (computerMove == paper && playerMove == scissors) {
// 	paper = '<img src="images/paper_sci_left.png">'
// 	scissors = '<img src="images/sci_paper_right.png">'
// } else if (computerMove == scissors && playerMove == rock) {
// 	scissors = '<img src="images/sci_rock_left.png">'
// 	rock = '<img src="images/rock_sci_right.png">'
// } else if (computerMove == rock && playerMove == rock) {
// 	rock = '<img src="images/rock_left_2.png">'
// } else if (computerMove == paper && playerMove == paper) {
// 	paper = '<img src="images/paper_left_2.png">'
// } else if (computerMove == scissors && playerMove == scissors) {
// 	scissors = '<img src="images/sci_left_2.png">'
// } else if (computerMove == paper && playerMove == rock) {
// 	rock = '<img src="images/rock_paper_right.png">'
// 	paper = '<img src="images/paper_rock_left.png">'
// } else if (computerMove == scissors && playerMove == paper) {
// 	paper = '<img src="images/paper_sci_right.png">'
// 	scissors = '<img src="images/sci_paper_left.png">'
// } else if (computerMove == rock && playerMove == scissors) {
// 	scissors = '<img src="images/sci_rock_right.png">'
// 	rock = '<img src="images/rock_sci_left.png">'
// }
