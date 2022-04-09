import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popupElement, submitDeletion) {
        super(popupElement);
        this._popupElement = popupElement
        this._submitDeletion = submitDeletion;
        this._form = this._popupElement.querySelector('.popup__form')
        this._delButton = this._popupElement.querySelector('.popup__button')

        this.open = this.open.bind(this)
        
    }

    open(card) {
        super.open();
        this._card = card;
    }

    setEventListeners() {
     super.setEventListeners();
     this._delButton.addEventListener('click', () => {
        this._submitDeletion(this._card)
     })
    }
}      