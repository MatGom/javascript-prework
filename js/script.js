let playerInput = prompt('Make your move! 1: rock, 2: paper, 3: scissors.')
let randomNumber = Math.floor(Math.random() * 3 + 1)
let computerMove = getMoveName(randomNumber)
let playerMove = getMoveName(playerInput)

function getMoveName(argMoveId) {
	if (argMoveId == 1) {
		return 'rock'
	} else if (argMoveId == 2) {
		return 'paper'
	} else if (argMoveId == 3) {
		return 'scissors'
	}

	printMessage("I don't know a move of id " + argMoveId + '.')
	return 'unknown move'
}

function displayResult(argComputerMove, argPlayerMove) {
	printMessage('My move is ' + computerMove)
	printMessage('Your move is: ' + playerMove)

	if (
		(argComputerMove == 'rock' && argPlayerMove == 'paper') ||
		(argComputerMove == 'paper' && argPlayerMove == 'scissors') ||
		(argComputerMove == 'scissors' && argPlayerMove == 'rock')
	) {
		printMessage('You win!')
	} else if (argComputerMove == argPlayerMove) {
		printMessage('Draw!')
	} else {
		printMessage('You lose!')
	}
	console.log('moves:', argComputerMove, argPlayerMove)
}

displayResult(computerMove, playerMove)
