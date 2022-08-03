function playGame(playerInput) {
	clearMessages()

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
	}

	function displayResult(argComputerMove, argPlayerMove) {
		printMessage('My move is: ' + computerMove)
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
