import { avatarButton } from "../utils/constants";

export default class UserInfo {
  constructor({nameProfileSelector,infoProfileSelector}) {
      this._nameProfile = document.querySelector(nameProfileSelector);
      this._infoProfile = document.querySelector(infoProfileSelector);
  }
  getUserInfo () {
      return {
          profileName: this._nameProfile.textContent,
          profileInfo: this._infoProfile.textContent
      }
  }
  setUserInfo (name,about) {
     
      this._nameProfile.textContent = name;
      this._infoProfile.textContent = about;
      }
  getUserId() {
        return this._userId
    }
   setUserId(userId) {
       this._userId = userId
   }
   setAvatar(source) {
       document.querySelector('[data-avatar-src]').src = source
   }
}


