{
	let playerWins = 0
	let computerWins = 0
	let gamesPlayed = 0
	let playerWinrate = 0
	let computerWinrate = 0
	const rock = '<img src="images/rock_sci_right.png">'
	const paper = '<img src="images/paper_rock_right.png">'
	const scissors = '<img src="images/sci_paper_right.png">'

	const getMoveName = function (argMoveId) {
		if (argMoveId == 1) {
			return rock
		} else if (argMoveId == 2) {
			return paper
		} else if (argMoveId == 3) {
			return scissors
		}
	}

	const resetStats = () => {
		document.querySelector('.player-wins').textContent = 0
		document.querySelector('.computer-wins').textContent = 0
		document.querySelector('.player-rate').textContent = `0%`
		document.querySelector('.computer-rate').textContent = `0%`
		document.querySelector('.games-played').textContent = 0
		playerWins = 0
		computerWins = 0
		gamesPlayed = 0
		playerWinrate = 0
		computerWinrate = 0
		clearMessages()
	}

	const calculateWinrate = () => {
		document.querySelector('.player-wins').textContent = playerWins
		document.querySelector('.computer-wins').textContent = computerWins
		playerWinrate = ((playerWins / gamesPlayed) * 100).toFixed(1)
		document.querySelector('.player-rate').textContent = `${playerWinrate}%`
		computerWinrate = ((computerWins / gamesPlayed) * 100).toFixed(1)
		document.querySelector('.computer-rate').textContent = `${computerWinrate}%`
	}

	const playGame = function (playerInput) {
		clearMessages()

		gamesPlayed++
		document.querySelector('.games-played').textContent = gamesPlayed

		let randomNumber = Math.floor(Math.random() * 3 + 1)
		let computerMove = getMoveName(randomNumber)
		let playerMove = getMoveName(playerInput)

		getMoveName()

		const displayResult = function (argComputerMove, argPlayerMove) {
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

		document.querySelectorAll('button').forEach(button => {
			button.disabled = true
			setTimeout(() => {
				button.disabled = false
			}, 1100)
		})

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
}
