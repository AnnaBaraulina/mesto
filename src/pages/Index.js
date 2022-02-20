import { initialCards,enableValidation,popupEdit,popupEditOpen,containerName,containerAbout,popupPhoto,popupAdd,popupAddOpen,elementsContainer} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import './index.css';
import UserInfo from '../components/Userinfo.js';

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
  const card = new Card('.template', item.name || item.title, item.link || item['popup-link'], callback);
  const cardElement = card.generateCard();
  return cardElement
} 

function handleAddCard (item) {
  const card = addCard(item, handleClickCard)
  console.log(card);
  renderCard.addItem(card);
} 

function handleProfileSubmitForm(item) {
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