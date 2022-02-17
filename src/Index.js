import Card from '../Card.js';
import FormValidator from '../FormValidator.js';



const popupEdit = document.querySelector(".popup_edit"); //попап редактирования профиля
const popupEditOpen = document.querySelector(".profile__edit-button"); // кнопка открытия попапа редактирования профиля
const popupEditClose = popupEdit.querySelector("#close-edit"); //кнопка закрытия попапа редактирования профиля

const infoName = document.querySelector(".profile__name"); //строка имени в профиле
const infoAbout = document.querySelector(".profile__about"); //строка описания в профиле
const containerName = document.querySelector("#name"); //строка имени в попапе редактирования профиля
const containerAbout = document.querySelector("#career"); //строка описания в попапе редактирования профиля

const buttonSubmitAdd = document.querySelector('#submit-add');

const popupPhoto = document.querySelector('.popup_image');
const imgLink = document.querySelector(".popup__image-url");
const popupName = document.querySelector('.popup__image-name');
const popupPhotoClose = popupPhoto.querySelector('#close-photo');

const popupList = document.querySelectorAll('.popup');

const popupActiv = document.querySelector('popup_opened');
const listContainer = document.querySelector('.elements');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
  popup.addEventListener('mousedown', closePopupOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
  popup.removeEventListener('mousedown', closePopupOverlay);
}
// функция отркрытия попапа редактирования профиля
function openpopupEdit() {
  openPopup(popupEdit);
  containerName.value = infoName.innerText;
  containerAbout.value = infoAbout.innerText;
}

popupEditOpen.addEventListener('click', openpopupEdit);
popupEditClose.addEventListener('click', () => closePopup(popupEdit));

// Находим форму в DOM
const editForm = document.querySelector("#edit");
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function editSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  
  infoName.textContent = containerName.value;
  infoAbout.textContent = containerAbout.value;
  closePopup(popupEdit);
  
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editForm.addEventListener('submit', editSubmitHandler);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]

const elementsContainer = document.querySelector('.elements'); // переменная для вставки карточки через template
const template = document.querySelector('.template');

//старый код, который создавал карточку, удалял её, открывал в полном размере, позволял поставить лайк
/*function getCardItem(item) {
  const cardElement = template.content.querySelector('.element').cloneNode(true);  
  cardElement.querySelector('.element__heading').textContent = item.name;
  const cardImage = cardElement.querySelector('.element__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  
 
  const removeBtn = cardElement.querySelector('.element__remove');
  removeBtn.addEventListener('click', handleDelete);


 // открываем полную картинку
 cardElement.querySelector('.element__image').addEventListener('click', function(){
    imgLink.src = item.link;
    imgLink.alt = item.name;
    popupName.textContent = item.name;
    openPopup(popupPhoto);
  });

  cardElement.querySelector('.element__icon').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__icon_active');
  });

  return cardElement;
} 

function renderElements(array, elementsContainer) {
  array.forEach((item) => elementsContainer.appendChild(getCardItem(item)));
}

renderElements(initialCards, elementsContainer);


function handleDelete(event) {
  const targetEl = event.target;
  const listItem = targetEl.closest('.element');
  listItem.remove();
  
}*/

//новый код по ооп

function handleClickCard(link, name) {
  imgLink.src = link;
  imgLink.alt = link;
  popupName.textContent = name;
  openPopup(popupPhoto);
}


function renderCard(item) {
  const cardContainer = new Card('.template', item.name, item.link, handleClickCard);
  return cardContainer.generateCard();
}

initialCards.forEach((item) => {
  listContainer.append(renderCard(item));
});

const popupAdd = document.querySelector('.popup_new');
const popupAddOpen = document.querySelector('.profile__add-button');
const popupAddClose = document.querySelector('#close-add');


popupAddOpen.addEventListener('click', () => openPopup(popupAdd), buttonSubmitAdd.classList.add('popup__button_disabled'), buttonSubmitAdd.disabled = true);
popupAddClose.addEventListener('click', () => closePopup(popupAdd));

const popupTitle = document.getElementById('title');
const popupLink = document.getElementById('popup-link');
const formAdd = document.getElementById('new');



function addElement(evt) {
  evt.preventDefault();
  const profileInput = popupTitle.value;
  const profileLink = popupLink.value;
  const card = {name:profileInput, link:profileLink}
  renderCard(card)
  elementsContainer.prepend(renderCard(card));
  evt.target.reset();
  closePopup(popupAdd);
  formAddValidator.disabledButton();
}


formAdd.addEventListener('submit', addElement);

popupPhotoClose.addEventListener('click', () => closePopup(popupPhoto));

//закрытие попапа esk и overlay
function closePopupEscape (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

function closePopupOverlay (evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target === openedPopup) {
    closePopup(openedPopup);
  };
};


const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const formEditValidator = new FormValidator(enableValidation, popupEdit);
const formAddValidator = new FormValidator(enableValidation, popupAdd);
formEditValidator.enableValidation();
formEditValidator.resetValidation();
formAddValidator.enableValidation();

