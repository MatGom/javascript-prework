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
