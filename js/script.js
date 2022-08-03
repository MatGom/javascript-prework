let randomNumber = Math.floor(Math.random() * 3 + 1)

console.log('Drawn number is: ' + randomNumber)

let computerMove = 'unknown move'

if (randomNumber == 1) {
	computerMove = 'rock'
} else if (randomNumber == 2) {
	computerMove = 'paper'
} else if (randomNumber == 3) {
	computerMove = 'scissor'
}

printMessage('My move is ' + computerMove)

let playerInput = prompt('Make your move! 1: rock, 2: paper, 3: scissors.')

console.log('Player chose: ' + playerInput)

let playerMove = 'unknown move'

if (playerInput == '1') {
	playerMove = 'rock'
} else if (playerInput == '2') {
	playerMove = 'paper'
} else if (playerInput == '3') {
	playerMove = 'scissors'
}

printMessage('Your move is: ' + playerMove)

if (
	(computerMove == 'rock' && playerMove == 'paper') ||
	(computerMove == 'paper' && playerMove == 'scissors') ||
	(computerMove == 'scissors' && playerMove == 'rock')
) {
	printMessage('You win!')
} else if (computerMove == playerMove) {
	printMessage('Draw!')
} else {
	printMessage('You lose!')
}
