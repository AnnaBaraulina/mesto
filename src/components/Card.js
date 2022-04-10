export default class Card {
    constructor(selector, data, handleClickCard, userId, deleteCard, likeCard) {
        this._selector = selector;
        this._link = data.link;
        this._name = data.name;
        this._cardId = data._id; // wh
        this._ownerId = data.owner._id; // w
        this._handleClickCard = handleClickCard;
        this._deleteCard = deleteCard; //metod
        this._likeCard = likeCard; //metod
        this._userId = userId;
        this._likes = data.likes;
        this._isLiked = data.likes.some((item) => item._id === this._userId);
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._selector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate();
        this._like = this._element.querySelector('.element__icon');
        this._deleteButton = this._element.querySelector('.element__remove');
        this._cardImage = this._element.querySelector('.element__image');
        this._cardImage.src = this._link;
        this._cardImage = this._name;
        this._element.querySelector('.element__heading').textContent = this._name;
        this._likeCalc = this._element.querySelector('.element__likes');
        this._likeCalc.textContent = this._likes.length;
        if (this._ownerId !== this._userId) {
            this._deleteButton.classList.add('element__remove_disabled')
        }
        if (this._isLiked) {
            this._like.classList.add('element__icon_active');
        }

        this._setEventListeners()

        return this._element;

    }
    deleteCard = () => {
        this._element.remove();
        this._element = null;
    }
    likeCard = (data) => {
        /*this._like.classList.toggle('element__icon_active');*/
        this._likeCalc.textContent = data.likes.length;
        this._isLiked = !this._isLiked;
        if (this._isLiked) {
            this._like.classList.add('element__icon_active');
        } else {
            this._like.classList.remove('element__icon_active');
        }

    }

    getIsLiked() {
        return this._isLiked;
    }

    _setEventListeners() {
        this._element.
        querySelector('.element__remove')
        .addEventListener('click',() => this._deleteCard(this));
        this._like.addEventListener('click', () => this._likeCard(this));
        this._element.
        querySelector('.element__image')
        .addEventListener('click', () => {
            const data = { link: this._link, name: this._name }
            this._handleClickCard(data);
        }
        );
    }
    getIdCard() {
        return this._cardId;
    }

}

