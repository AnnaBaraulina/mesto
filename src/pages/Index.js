import { initialCards, enableValidation, popupEdit, popupEditOpen, containerName, containerAbout, popupPhoto, popupAdd, popupAddOpen, elementsContainer, editButton, addButton } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import './index.css';
import UserInfo from '../components/Userinfo.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-38',
  headers: {
    authorization: 'e7f5540f-eb40-43c4-bbec-4f2f48de848c',
    'Content-Type': 'application/json',
  }
});

const getProfileInfo = api.getProfile()
  .then(profileInfo => {
    return profileInfo
  })
  .catch((err) => {
    console.log(`Ошибка при получении данных ${err}`)
  })



const popupWithImage = new PopupWithImage(popupPhoto);

// редактирование профиля
const userInfo = new UserInfo({ nameProfileSelector: '.profile__name', infoProfileSelector: '.profile__about' });
const popupEditProfile = new PopupWithForm(document.querySelector(".popup_edit"), handleProfileSubmitForm);

// Profile form submition
function handleProfileSubmitForm(data) {
  editButton.textContent = 'Сохранение...'
  api.editProfileInfo(data)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about)
    })
    .catch((err) => {
      console.log(`Ошибка при попытке редактирования профиля ${err}`)
    })
    .finally(() => {
      editButton.textContent = 'Сохранить'
      popupEditProfile.close()
    })
}


popupEditOpen.addEventListener('click', () => {
  popupEditProfile.open();
  const userInfoForm = userInfo.getUserInfo();
  containerName.value = userInfoForm.profileName;
  containerAbout.value = userInfoForm.profileInfo;
  formEditValidator.resetValidation();
});

//добавление карточки

const handleClickCard = (data) => {
  popupWithImage.open(data)
};

function addCard(data) {
  const card = new Card('.template', { data }, handleClickCard, userInfo.getUserId, /*deleteCard, likeCard*/);
  const cardElement = card.generateCard();
  return cardElement
}

const popupAddCard = new PopupWithForm(document.querySelector('.popup_new'), handleCardSubmitForm);



// Card submition form
function handleCardSubmitForm(data) {
  addButton.textContent = 'Создание...'
  api.addCard(data)
    .then((res) => {
      renderCard.addItem(addCard(res))
      popupAddCard.close()
    })
    .catch((err) => {
      console.log(`Ошибка при загрузке новой карточки ${err}`)
    })
    .finally(() => {
      addButton.textContent = 'Создать'
    })

}
popupAddCard.setEventListeners();

//разметка для карточек
const renderCard = new Section({
  renderer: (item) => {
    const newCard = addCard(item);
    /*renderCard.addItem(newCard)*/
    renderCard.setItem(newCard);
  }
}, elementsContainer);

const getInitialCards = api.getCards()
  .then(initialCards => {
    return initialCards
  })
  .catch((err) => {
    console.log(`Ошибка загрузки карточек ${err}`)
  })

Promise.all([getProfileInfo, getInitialCards])
  .then(([profileInfo, initialCards]) => {
    userInfo.setUserInfo(profileInfo.name, profileInfo.about)
    renderCard.render(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка при получении данных ${err}`)
  })




popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();

const formEditValidator = new FormValidator(enableValidation, popupEdit);
const formAddValidator = new FormValidator(enableValidation, popupAdd);
formEditValidator.enableValidation();
formAddValidator.resetValidation();
formAddValidator.enableValidation();

popupAddOpen.addEventListener('click', function () {
  popupAddCard.open();
  formAddValidator.resetValidation();
});


