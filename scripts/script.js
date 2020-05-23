let popup = document.querySelector(".popup");
const popupOpen = document.querySelector(".profile__edit-button");
const popupClose = document.querySelector(".popup__close-icon");

let infoName = document.querySelector(".profile__name");
let infoAbout = document.querySelector(".profile__about");
let containerName = document.querySelector(".popup__name");
let containerAbout = document.querySelector(".popup__about");

const popupSubmitButton = document.querySelector(".popup__submit");

popupOpen.onclick = function () {
  popup.style.display="flex";
  containerName.value = infoName.innerText;
  containerAbout.value = infoAbout.innerText;
};

popupClose.onclick = function () {
  popup.style.display="none";
};

// Находим форму в DOM
let formElement = document.querySelector(".popup__container");
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  
  // Находим поля формы в DOM
  
  let containerName = document.querySelector(".popup__name");
  let containerAbout = document.querySelector(".popup__about");
  
  // Получите значение полей из свойства value
 

  // Выберите элементы, куда должны быть вставлены значения полей
  let infoName = document.querySelector(".profile__name");
  let infoAbout = document.querySelector(".profile__about");

  infoName.textContent = containerName.value;
  infoAbout.textContent = containerAbout.value;
  
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);


popupSubmitButton.addEventListener('click', popupClose.onclick);


















