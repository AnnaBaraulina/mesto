import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import './pages/index.css';
import UserInfo from './Userinfo.js';

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
const popupAdd = document.querySelector('.popup_new');
const popupAddOpen = document.querySelector('.profile__add-button');
const popupAddClose = document.querySelector('#close-add');
const popupTitle = document.getElementById('title');
const popupLink = document.getElementById('popup-link');
const formAdd = document.getElementById('new');
const elementsContainer = document.querySelector('.elements'); // переменная для вставки карточки через template
const template = document.querySelector('.template');
const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

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
];

//новый код по ооп

const popupWithImage = new PopupWithImage(popupPhoto); //yes


const popupWithFormElement = new PopupWithForm(document.querySelector(".popup_edit"), handleProfileSubmitForm); //y

const popupWithFormElementNew = new PopupWithForm(document.querySelector('.popup_new'),handleAddCard); //y popupWithFormPlace

const userInfo = new UserInfo({nameProfileSelector:'.profile__name',infoProfileSelector:'.profile__about'}); //y

const handleClickCard = (link, name) => {popupWithImage.open(link,name)}; //y

const renderCard = new Section ({
  items: initialCards,
  renderer: (item) => {
    const handleClickCard = (link, name) => {popupWithImage.open(link,name)}
    return addCard(item,handleClickCard)
  }
},elementsContainer); //y

renderCard.render(); //y


popupWithFormElement.setEventListeners();//y
popupWithImage.setEventListeners();//y
popupWithFormElementNew.setEventListeners(); //y


function addCard (item,callback) {
  const card = new Card('.template', item.name, item.link, callback);
  const cardElement = card.generateCard();
  return cardElement
} //y

function handleAddCard (item) {
  const card = addCard(item, handleClickCard)
  renderCard.addItem(card);
} //y



function handleProfileSubmitForm(item) {
  userInfo.setUserInfo(item.profileName,item.profileInfo)
} //y

const formEditValidator = new FormValidator(enableValidation, popupEdit); //y
const formAddValidator = new FormValidator(enableValidation, popupAdd); //y
formEditValidator.enableValidation(); //y
formAddValidator.resetValidation(); //y
formAddValidator.enableValidation(); //y

popupAddOpen.addEventListener('click', function(){
  popupWithFormElementNew.open();
  formAddValidator.resetValidation();
}); //y newPlaceButton 

popupEditOpen.addEventListener('click', function(){
  popupWithFormElement.open();
  const userInfoForm = userInfo.getUserInfo();
  containerName.value = userInfoForm.profileName;
  containerAbout.value = userInfoForm.profileInfo;
  formEditValidator.resetValidation();
}); //y