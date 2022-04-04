export default class Api {
    constructor({baseUrl, headers }) {
      this._headers = headers
      this._baseUrl = baseUrl
    }

    _handleResponse(res) {
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
   
  
    // другие методы работы с API
  }
  
 