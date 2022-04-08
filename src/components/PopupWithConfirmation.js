import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popupElement, handleFormSubmit) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.quereSelector('.popup-delete')
    }

    openPopup(card) {
        super.openPopup();
        this._element = card;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._element);
        })
    }

}