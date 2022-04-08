export default class Api {
    constructor({baseUrl, headers }) {
      this._headers = headers
      this._baseUrl = baseUrl
    }

    _handleResponse(res) {
        console.log(res);
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(this._handleResponse);
    }

    getCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers

        })
        .then(this._handleResponse);
    }

    editProfileInfo({ name, about }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name, //не уверена
                about: about, //не уверена
               
            })
        })
        .then(this._handleResponse);
    }

    addCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
                id: data.id
            })

        })
        .then(this._handleResponse);
    }

    removeCard(cardId) { 
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._handleResponse);
    }

    putLikeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers,
        }).then(this._handleResponse);
    }
    removeLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._handleResponse);
    }
    
   
  
    // другие методы работы с API
  }
  
 