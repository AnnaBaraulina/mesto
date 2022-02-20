import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
    constructor (popupElement) {
        super (popupElement)
        this._popupImageLink = this._popupElement.querySelector('.popup__image-url');
        this._popupImageTitle = this._popupElement.querySelector('.popup__image-name');
    }
    open (link, name) {
        super.open();
        this._popupImageLink.src = link;
        this._popupImageLink.alt = name;
        this._popupImageTitle = name;
    }
}