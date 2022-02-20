export default class Card {
    constructor(selector, name, link, handleClickCard) {
        this._selector = selector;
        this._link = link;
        this._name = name;
        this._handleClickCard = handleClickCard;
    }
    _getTemplate() {
        const cardElement = document
        .querySelector(this._selector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        return  cardElement;
    }
    generateCard() {
       this._element = this._getTemplate();
       this._like = this._element.querySelector('.element__icon');
       this._element.querySelector('.element__image').src = this._link;
       this._element.querySelector('.element__image').alt = this._name;
       this._element.querySelector('.element__heading').textContent = this._name;
       this._setEventListeners()
       console.log('generateCard', this._element)
       console.log('_link', this._link)
       return this._element;

    }
    _handleDeleteCard = () => {
        this._element.remove();
        this._element = null;
    }
    _handlePressLike = () => {
        this._like.classList.toggle('element__icon_active');
    }

    _setEventListeners() {
        this._element.querySelector('.element__remove').addEventListener('click', this._handleDeleteCard);
        this._like.addEventListener('click', this._handlePressLike);
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleClickCard(this._link, this._name);}
        );  
    }

}

