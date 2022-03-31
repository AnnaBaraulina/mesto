class Api {
    constructor({baseUrl, headers }) {
      this._headers = headers
      this._baseUrl = baseUrl
    }
    getProfile() {
       return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)
        
    }
  
   
  
    // другие методы работы с API
  }
  
  export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-38',
    headers: {
      authorization: 'e7f5540f-eb40-43c4-bbec-4f2f48de848c',
      'Content-Type': 'application/json'
    }
  });