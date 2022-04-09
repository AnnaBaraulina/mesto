import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popupElement, formSubmit) {
        super(popupElement);
        this._formSubmit = formSubmit;
        this._form = this._popupElement.querySelector('popup-form')
        this._delButton = this._popupElement.querySelector('.popup__button')
        
    }

    openPopup(card) {
        super.openPopup();
        this._element = card;
    }
    setEventListeners() {
     super.setEventListeners();
     this._delButton.addEventListener('click', () => {
         this._deleteCard(this._element);
     })
    }
}      