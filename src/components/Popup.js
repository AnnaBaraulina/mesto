export default class Popup {
    constructor (popupElement) {
        this._popupElement = popupElement;
        this._popupCloseButton = this._popupElement.querySelector('.popup__close-icon')
        this.close = this.close.bind(this)
    }
    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        
    }
    close() {
        this._popupElement.classList.remove('popup_opened')
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    _handleOverlayClose = (evt) => {
        if (evt.target.classList.contains('popup__overlay')) {
            this.close();
        }
    }
    setEventListeners() {
        this._popupCloseButton.addEventListener('click', this.close)
        document.addEventListener('click', this._handleOverlayClose);
     



 

   
    }
}