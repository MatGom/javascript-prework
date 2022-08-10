const printMessage = function (msg) {
	let div = document.createElement('div')
	div.innerHTML = msg
	messagesBox.appendChild(div)
}

const clearMessages = function () {
	messagesBox.innerHTML = ''
	introTitle.style.display = 'block'
}

const showPopup = () => {
	infoPopup.classList.remove('hidden')
	infoPopupShadow.classList.remove('hidden')
}

const closePopup = () => {
	infoPopup.classList.add('hidden')
	infoPopupShadow.classList.add('hidden')
}
