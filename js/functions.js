const printMessage = function (msg) {
	let div = document.createElement('div')
	div.innerHTML = msg
	document.getElementById('messages').appendChild(div)
}

const clearMessages = function () {
	document.getElementById('messages').innerHTML = ''
	document.querySelector('h3').style.display = 'block'
}

const showPopup = () => {
	document.querySelector('.info-popup').classList.remove('hidden')
	document.querySelector('.popup-shadow').classList.remove('hidden')
}

const closePopup = () => {
	document.querySelector('.info-popup').classList.add('hidden')
	document.querySelector('.popup-shadow').classList.add('hidden')
}
