function printMessage(msg) {
	let div = document.createElement('div')
	div.innerHTML = msg
	document.getElementById('messages').appendChild(div)
}

function clearMessages() {
	document.getElementById('messages').innerHTML = ''
}

const showPopup = () => {
	document.querySelector('.info-popup').classList.remove('hidden')
	document.querySelector('.popup-shadow').classList.remove('hidden')
}

const closePopup = () => {
	document.querySelector('.info-popup').classList.add('hidden')
	document.querySelector('.popup-shadow').classList.add('hidden')
}
