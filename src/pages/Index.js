import { initialCards, enableValidation, popupEdit, popupEditOpen, containerName, containerAbout, popupPhoto, popupAdd, popupAddOpen, elementsContainer, editButton, addButton, popupCardDelete, avatarButton, editAvatarInProfile, editAvatarInProfileForm } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
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


const userInfo = new UserInfo({ nameProfileSelector: '.profile__name', infoProfileSelector: '.profile__about' });
const popupEditProfile = new PopupWithForm(document.querySelector(".popup_edit"), handleProfileSubmitForm);

// Profile form submition
function handleProfileSubmitForm(data) {
  editButton.textContent = 'Сохранение...'
  api.editProfileInfo(data)
    .then((res) => {
      userInfo.setUserId(res._id)
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
  const card = new Card('.template', data, handleClickCard, userInfo.getUserId(), deleteCard, likeCard);
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
    userInfo.setAvatar(profileInfo.avatar)
    userInfo.setUserId(profileInfo._id);
    renderCard.render(initialCards);

    setTimeout(() => {
      cloakCleaning()
    }, 0)
  })
  .catch((err) => {
    console.log(`Ошибка при получении данных ${err}`)
  })

//изменения аватара
const changeProfileAvatarPopup = new PopupWithForm(document.querySelector('.popup_avatar'), submitAvatarForm)

function submitAvatarForm(data) {
  avatarButton.textContent = "Сохранение..."
  api.editAvatar(data)
    .then((res) => {
      userInfo.setAvatar(res.avatar)
      changeProfileAvatarPopup.close();
    })
    .catch((err) => {
      console.log(`Ошибка при попытке смены аватара ${err}`);
    })
    .finally(() => {
      avatarButton.textContent = 'Сохранить'
    })
}





function likeCard(card) {
  if (!card.getIsLiked()) {
    api.putLikeCard(card._cardId)
      .then((res) => {
        card.likeCard(res);
      })
      .catch((err) => {
        console.log(`Ошибка при добавлении лайка ${err}`)
      });
  } else {
    api.removeLike(card._cardId)
      .then((res) => {
        card.likeCard(res);
      })
      .catch((err) => {
        console.log(`Ошибка при снятии лайка ${err}`)
      });
  }
}


const popupRemove = new PopupWithConfirmation(document.querySelector('#delete'), submitDeletion); // popupDelete

function deleteCard(card) {
  popupRemove.open(card);
}

function submitDeletion(card) {
  popupCardDelete.textContent = 'Удаление...'

  api.removeCard(card.getIdCard())
    .then(() => {
      card.deleteCard();

      popupRemove.close();
    })
    .catch((err) => {
      console.log(`Ошибка при удалении карточки ${err}`);
    })
    /*.finally(() => {
      popupRemove.close();
      //  popupCardDelete.textContent = 'Да'
    })*/
};

function cloakCleaning() {
  Array.from(document.querySelectorAll('[x-cloak]')).map((el) => {
    el.removeAttribute('x-cloak')
  })
}


popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();
changeProfileAvatarPopup.setEventListeners();
popupRemove.setEventListeners();

const formEditValidator = new FormValidator(enableValidation, popupEdit);
const formAddValidator = new FormValidator(enableValidation, popupAdd);
const formAvatarValidator = new FormValidator(enableValidation, editAvatarInProfileForm)

formEditValidator.enableValidation();
formAvatarValidator.enableValidation();
formAddValidator.enableValidation();

formAddValidator.resetValidation();

popupAddOpen.addEventListener('click', function () {
  popupAddCard.open();
  formAddValidator.resetValidation();
});

editAvatarInProfile.addEventListener('click', () => {
  formAvatarValidator.resetValidation()
  changeProfileAvatarPopup.open()
})

