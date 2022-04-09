export const initialCards = [
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

  export const enableValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }

 export const popupEdit = document.querySelector(".popup_edit"); //попап редактирования профиля
 export const popupEditOpen = document.querySelector(".profile__edit-button"); // кнопка открытия попапа редактирования профиля
 export const containerName = document.querySelector("#name"); //строка имени в попапе редактирования профиля
 export const containerAbout = document.querySelector("#career"); //строка описания в попапе редактирования профиля
 export const popupPhoto = document.querySelector('.popup_image');
 export const popupAdd = document.querySelector('.popup_new');
 export const popupAddOpen = document.querySelector('.profile__add-button');
 export const elementsContainer = document.querySelector('.elements'); // переменная для вставки карточки через template
 export const editButton = document.querySelector('#submit-edit');
 export const addButton = document.querySelector('#submit-add');
 export const popupCardDelete = document.querySelector('#confirm-delete');
 export const avatarButton =document.querySelector('#submit-avatar');
 export const editAvatarInProfile = document.querySelector('.profile__edit-avatar');