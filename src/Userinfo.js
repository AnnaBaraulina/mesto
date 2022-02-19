export default class UserInfo {
  constructor({nameProfileSelector,infoProfileSelector}) {
      this._nameProfile = document.querySelector(nameProfileSelector);
      this._infoProfile = document.querySelector(infoProfileSelector);
  }
  getUserInfo () {
      console.log('this.getUserInfo', this._nameProfile)
      console.log('this.getUserInfo', this._nameProfile)
      return {
          profileName: this._nameProfile.textContent,
          profileInfo: this._infoProfile.textContent
      }
  }
  setUserInfo (name,info) {
      console.log(this._nameProfile.textContent)
      this._nameProfile.textContent = name;
      this._infoProfile.textContent = info;
      }
}