const popup = document.querySelector(".popup");
const popupOpen = document.querySelector(".profile__edit-button");
const popupClose = document.querySelector(".popup__close-icon");

let infoName = document.querySelector(".profile__name");
let infoAbout = document.querySelector(".profile__about");
let containerName = document.querySelector("#name");
let containerAbout = document.querySelector("#career");

const popupSubmitButton = document.querySelector(".popup__submit");

function openPopup() {
  popup.classList.add('popup_opened');
  console.log('popup явись');

  containerName.value = infoName.innerText;
  containerAbout.value = infoAbout.innerText;
}

function closePopup() {
  popup.classList.remove('popup_opened');
  console.log('popup закройся');
}


popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

// Находим форму в DOM
let formElement = document.querySelector(".popup__container");
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  
  infoName.textContent = containerName.value;
  infoAbout.textContent = containerAbout.value;
  popupClose();
  
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

popupSubmitButton.addEventListener('click', closePopup);




















