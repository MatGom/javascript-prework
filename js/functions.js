function printMessage(msg) {
	let div = document.createElement('div')
	div.innerHTML = msg
	document.getElementById('messages').appendChild(div)
}

function clearMessages() {
	document.getElementById('messages').innerHTML = ''
	document.querySelector('.player-wins').textContent = 0
	document.querySelector('.computer-wins').textContent = 0
	document.querySelector('.player-rate').textContent = `0%`
	document.querySelector('.computer-rate').textContent = `0%`
	document.querySelector('.games-played').textContent = 0
}

const showPopup = () => {
	document.querySelector('.info-popup').classList.remove('hidden')
	document.querySelector('.popup-shadow').classList.remove('hidden')
}

const closePopup = () => {
	document.querySelector('.info-popup').classList.add('hidden')
	document.querySelector('.popup-shadow').classList.add('hidden')
}

const calculateWinrate = () => {
	document.querySelector('.player-wins').textContent = playerWins
	document.querySelector('.computer-wins').textContent = computerWins
	playerWinrate = ((playerWins / gamesPlayed) * 100).toFixed(1)
	document.querySelector('.player-rate').textContent = `${playerWinrate}%`
	computerWinrate = ((computerWins / gamesPlayed) * 100).toFixed(1)
	document.querySelector('.computer-rate').textContent = `${computerWinrate}%`
}
