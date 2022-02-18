import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor (popupElement, handleFormSubmit) {
        super (popupElement)
        this._handleFormSubmit = handleFormSubmit
        this._inputList = this._popupElement.querySelectorAll('.popup__input')
        this._form = this._popupElement.querySelector('.popup__form');
    }
    _getInputValues() {
        this._formValues = {}
        this._inputList.forEach(input => {
            this._formValues[input.id] = input.value;
        });
        return this._formValues
    }
    close() {
        super.close()
        this._form.reset();
    }
    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });
    }
}