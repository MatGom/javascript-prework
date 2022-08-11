{
	let playerWins = 0;
	let computerWins = 0;
	let gamesPlayed = 0;
	let playerWinrate = 0;
	let computerWinrate = 0;

	const rock = '<img src="images/rock_sci_right.png">';
	const paper = '<img src="images/paper_rock_right.png">';
	const scissors = '<img src="images/sci_paper_right.png">';

	const rockBtn = document.getElementById('play-rock');
	const paperBtn = document.getElementById('play-paper');
	const scissorsBtn = document.getElementById('play-scissors');
	const resetBtn = document.querySelector('.reset-btn');
	const playBtns = document.querySelectorAll('button');

	const playerWinsCounter = document.querySelector('.player-wins');
	const computerWinsCounter = document.querySelector('.computer-wins');
	const playerWinrateStat = document.querySelector('.player-rate');
	const computerWinrateStat = document.querySelector('.computer-rate');
	const gamesCounter = document.querySelector('.games-played');

	const getMoveName = function (argMoveId) {
		if (argMoveId == 1) {
			return rock;
		} else if (argMoveId == 2) {
			return paper;
		} else if (argMoveId == 3) {
			return scissors;
		}
	};

	const resetStats = () => {
		playerWinsCounter.textContent = 0;
		computerWinsCounter.textContent = 0;
		playerWinrateStat.textContent = `0%`;
		computerWinrateStat.textContent = `0%`;
		gamesCounter.textContent = 0;
		playerWins = 0;
		computerWins = 0;
		gamesPlayed = 0;
		playerWinrate = 0;
		computerWinrate = 0;
		clearMessages();
	};

	const calculateWinrate = () => {
		playerWinsCounter.textContent = playerWins;
		computerWinsCounter.textContent = computerWins;
		playerWinrate = ((playerWins / gamesPlayed) * 100).toFixed(1);
		playerWinrateStat.textContent = `${playerWinrate}%`;
		computerWinrate = ((computerWins / gamesPlayed) * 100).toFixed(1);
		computerWinrateStat.textContent = `${computerWinrate}%`;
	};

	const playGame = function (playerInput) {
		clearMessages();

		gamesPlayed++;
		gamesCounter.textContent = gamesPlayed;

		let randomNumber = Math.floor(Math.random() * 3 + 1);
		let computerMove = getMoveName(randomNumber);
		let playerMove = getMoveName(playerInput);

		getMoveName();

		const displayResult = function (argComputerMove, argPlayerMove) {
			printMessage('Your move is');
			printMessage('My move is');
			printMessage(playerMove);
			printMessage(computerMove);

			if (
				(argComputerMove == rock && argPlayerMove == paper) ||
				(argComputerMove == paper && argPlayerMove == scissors) ||
				(argComputerMove == scissors && argPlayerMove == rock)
			) {
				printMessage('You win!');
				playerWins++;
				calculateWinrate();
			} else if (argComputerMove == argPlayerMove) {
				printMessage('Draw!');
				calculateWinrate();
			} else {
				printMessage('You lose!');
				computerWins++;
				calculateWinrate();
			}
		};

		playBtns.forEach(button => {
			button.disabled = true;
			setTimeout(() => {
				button.disabled = false;
			}, 1100);
		});

		introTitle.style.display = 'none';

		displayResult(computerMove, playerMove);
	};

	rockBtn.addEventListener('click', function () {
		playGame(1);
	});
	paperBtn.addEventListener('click', function () {
		playGame(2);
	});
	scissorsBtn.addEventListener('click', function () {
		playGame(3);
	});
	resetBtn.addEventListener('click', resetStats);
	showPopupIcon.addEventListener('click', showPopup);
	closePopupIcon.addEventListener('click', closePopup);
}
