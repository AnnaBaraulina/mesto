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

const popupWithImage = new PopupWithImage(popupPhoto); 


const popupEditProfile = new PopupWithForm(document.querySelector(".popup_edit"), handleProfileSubmitForm); 

const popupAddCard = new PopupWithForm(document.querySelector('.popup_new'),handleAddCard); 

const userInfo = new UserInfo({nameProfileSelector:'.profile__name',infoProfileSelector:'.profile__about'}); 

const handleClickCard = (link, name) => {popupWithImage.open(link,name)};

const 
renderCard = new Section ({
  items: initialCards,
  renderer: (item) => {
    const handleClickCard = (link, name) => {popupWithImage.open(link,name)}
    return addCard(item,handleClickCard)
  }
},elementsContainer);

renderCard.render();


popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();
popupAddCard.setEventListeners();


function addCard (item,callback) {
  const card = new Card('.template', item.name, item.link, callback);
  const cardElement = card.generateCard();
  return cardElement
} 

function handleAddCard (item) {
  const card = addCard(item, handleClickCard)
  console.log(card);
  renderCard.addItem(card);
} 



function handleProfileSubmitForm(item) {
  console.log('item', item);
  userInfo.setUserInfo(item.name, item.career)
} 

const formEditValidator = new FormValidator(enableValidation, popupEdit); 
const formAddValidator = new FormValidator(enableValidation, popupAdd); 
formEditValidator.enableValidation(); 
formAddValidator.resetValidation();
formAddValidator.enableValidation();

popupAddOpen.addEventListener('click', function(){
  popupAddCard.open();
  formAddValidator.resetValidation();
}); 

popupEditOpen.addEventListener('click', function(){
  popupEditProfile.open();
  const userInfoForm = userInfo.getUserInfo();
  containerName.value = userInfoForm.profileName;
  containerAbout.value = userInfoForm.profileInfo;
  formEditValidator.resetValidation();
}); 