const introTitle = document.querySelector('h3');
const messagesBox = document.getElementById('messages');

const showPopupIcon = document.querySelector('.info');
const closePopupIcon = document.querySelector('.close-info');
const infoPopup = document.querySelector('.info-popup');
const infoPopupShadow = document.querySelector('.popup-shadow');

const printMessage = function (msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	messagesBox.appendChild(div);
};

const clearMessages = function () {
	messagesBox.innerHTML = '';
	introTitle.style.display = 'block';
};

const showPopup = () => {
	infoPopup.classList.remove('hidden');
	infoPopupShadow.classList.remove('hidden');
};

const closePopup = () => {
	infoPopup.classList.add('hidden');
	infoPopupShadow.classList.add('hidden');
};
