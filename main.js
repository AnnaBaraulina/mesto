(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},t=document.querySelector(".popup_edit"),n=document.querySelector(".profile__edit-button"),r=document.querySelector("#name"),o=document.querySelector("#career"),i=document.querySelector(".popup_image"),u=document.querySelector(".popup_new"),l=document.querySelector(".profile__add-button"),s=document.querySelector(".elements");function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(){function e(t,n,r,o){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_handleDeleteCard",(function(){i._element.remove(),i._element=null})),c(this,"_handlePressLike",(function(){i._like.classList.toggle("element__icon_active")})),this._selector=t,this._link=r,this._name=n,this._handleClickCard=o}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._like=this._element.querySelector(".element__icon"),this._element.querySelector(".element__image").src=this._link,this._element.querySelector(".element__image").alt=this._name,this._element.querySelector(".element__heading").textContent=this._name,this._setEventListeners(),console.log("generateCard",this._element),console.log("_link",this._link),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__remove").addEventListener("click",this._handleDeleteCard),this._like.addEventListener("click",this._handlePressLike),this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleClickCard(e._link,e._name)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"_checkIfInputValid",(function(e){e.validity.valid?r._hideError(e):r._showError(e,e.validationMessage)})),_(this,"disabledButton",(function(){r._submitButton.classList.add("popup__button_disabled"),r._submitButton.disabled=!0})),_(this,"_showError",(function(e,t){var n=r._form.querySelector("#".concat(e.id,"-error"));n.textContent=t,n.classList.add(r._errorMessageClass),e.classList.add(r._inputErrorClass)})),_(this,"_hideError",(function(e,t){var n=r._form.querySelector("#".concat(e.id,"-error"));n.textContent="",n.classList.remove(r._errorMessageClass),e.classList.remove(r._inputErrorClass)})),_(this,"_hasInvalidInput",(function(){return r._inputs.some((function(e){return!e.validity.valid}))})),_(this,"_toggleButtonError",(function(){r._hasInvalidInput()?(r._submitButton.classList.add(r._inactiveButtonClass),r._submitButton.disabled=!0):(r._submitButton.classList.remove(r._inactiveButtonClass),r._submitButton.disabled=!1)})),_(this,"enableValidation",(function(){r._setInputListeners()})),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=this._form.querySelectorAll(this._inputSelector),this._submitButton=this._form.querySelector(this._submitButtonSelector),this._inputs=Array.from(this._inputList)}var t,n;return t=e,(n=[{key:"_setInputListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkIfInputValid(t),e._toggleButtonError()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonError(),this._inputList.forEach((function(t){e._hideError(t)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderItems=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"render",value:function(){var e=this;this._renderItems.forEach((function(t){e.addItem(e._renderer(t))}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),v(this,"_handleOverlayClose",(function(e){e.target.classList.contains("popup__overlay")&&n.close()})),this._popupElement=t,this._popupCloseButton=this._popupElement.querySelector(".popup__close-icon")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popupCloseButton.addEventListener("click",this.close.bind(this)),document.addEventListener("click",this._handleOverlayClose)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function O(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImageLink=t._popupElement.querySelector(".popup__image-url"),t._popupImageTitle=t._popupElement.querySelector(".popup__image-name"),t}return t=u,(n=[{key:"open",value:function(e,t){w(C(u.prototype),"open",this).call(this),this._popupImageLink.src=e,this._popupImageLink.alt=t,this._popupImageTitle=t}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(b);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}function R(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._inputList=n._popupElement.querySelectorAll(".popup__input"),n._form=n._popupElement.querySelector(".popup__form"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return console.log("inputList",this._inputList),this._formValues={},this._inputList.forEach((function(t){console.log("id",t),console.log("values",e._formValues),e._formValues[t.id]=t.value})),console.log("formValues",this._formValues),this._formValues}},{key:"close",value:function(){q(x(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;q(x(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(b);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n=t.nameProfileSelector,r=t.infoProfileSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameProfile=document.querySelector(n),this._infoProfile=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{profileName:this._nameProfile.textContent,profileInfo:this._infoProfile.textContent}}},{key:"setUserInfo",value:function(e,t){this._nameProfile.textContent=e,this._infoProfile.textContent=t}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),U=new L(i),A=new V(document.querySelector(".popup_edit"),(function(e){N.setUserInfo(e.name,e.career)})),M=new V(document.querySelector(".popup_new"),(function(e){var t=G(e,F);console.log(t),z.addItem(t)})),N=new D({nameProfileSelector:".profile__name",infoProfileSelector:".profile__about"}),F=function(e,t){U.open(e,t)},z=new y({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){return G(e,(function(e,t){U.open(e,t)}))}},s);function G(e,t){return new p(".template",e.name||e.title,e.link||e["popup-link"],t).generateCard()}z.render(),A.setEventListeners(),U.setEventListeners(),M.setEventListeners();var H=new d(e,t),J=new d(e,u);H.enableValidation(),J.resetValidation(),J.enableValidation(),l.addEventListener("click",(function(){M.open(),J.resetValidation()})),n.addEventListener("click",(function(){A.open();var e=N.getUserInfo();r.value=e.profileName,o.value=e.profileInfo,H.resetValidation()}))})();