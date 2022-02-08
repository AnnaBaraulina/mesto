/*const showError = (form, input, errorMessageText, errorMessageClass, inputErrorClass) => {
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.textContent = errorMessageText;
  errorMessage.classList.add(errorMessageClass);
  input.classList.add(inputErrorClass);
}



const hideError = (form, input, errorMessageClass, inputErrorClass) => {
    const errorMessage = form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = "";
    errorMessage.classList.remove(errorMessageClass);
    input.classList.remove(inputErrorClass);
    

}*/

/*const hasInvalidInput = (inputs) => {
  return Array.from(inputs).some((el) => !el.validity.valid);
} */

/*const toggleButtonError = (inputs, button, inactiveButtonClass) => {
    if (hasInvalidInput(inputs)) {
      button.classList.add(inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(inactiveButtonClass);
      button.disabled = false;
    }
}

const checkIfInputValid = (form, input, {inputErrorClass, errorClass}) => {
  if(!input.validity.valid) {
      showError(form, input, input.validationMessage, errorClass, inputErrorClass)
  } else {
       hideError(form, input, inputErrorClass, errorClass)
  }
}

const setInputListeners = (form, {inputSelector, submitButtonSelector, inputErrorClass, inactiveButtonClass, ...rest}) => {
  const inputs = Array.from(form.querySelectorAll(inputSelector));
  const submitButton = form.querySelector(submitButtonSelector);
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
     checkIfInputValid(form, input, rest);
     toggleButtonError(inputs, submitButton, inactiveButtonClass);
    });  
  });
}

const enableValidation = ({ formSelector, ...rest }) => {
    const forms = document.querySelectorAll(formSelector);

    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

    setInputListeners(form, rest);    
    });
};



enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }); */


  //ооп
  export default class FormValidator {
    constructor(selector, form) {
      this._form = form;
      this._inputSelector = selector.inputSelector;
      this._submitButtonSelector = selector.submitButtonSelector;
      this._inactiveButtonClass = selector.inactiveButtonClass;
      this._inputErrorClass = selector.inputErrorClass;
      this._errorClass = selector.errorClass;
      this._inputList = this._form.querySelectorAll(this._inputSelector);
      this._submitButton = this._form.querySelector(this._submitButtonSelector);
      this._inputs = Array.from(this._inputList);
    }
    _setInputListeners() {
        this._inputList.forEach((input) => {
        input.addEventListener('input', ()  => {
          this._checkIfInputValid(input);
          this._toggleButtonError();
        });
      });
    };
    _checkIfInputValid = (input) => {
      if(!input.validity.valid) {
        this._showError(input, input.validationMessage);
      } else {
        this._hideError(input);
      }
    };
    disabledButton = (submitButton) => {
      if (this._submitButton.submit) {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
      }
    };
 
    _showError = (input, errorMessageText) => {
      const errorMessage = this._form.querySelector(`#${input.id}-error`);
      errorMessage.textContent = errorMessageText;
      errorMessage.classList.add(this._errorMessageClass);
      input.classList.add(this._inputErrorClass);
    };
    _hideError = (input, errorMessageText) => {
      const errorMessage = this._form.querySelector(`#${input.id}-error`);
      errorMessage.textContent = '';
      errorMessage.classList.remove(this._errorMessageClass);
      input.classList.remove(this._inputErrorClass);
    };
    _hasInvalidInput = () => {
      return this._inputs.some((el) => {
        return !el.validity.valid;
      });
    };
    _toggleButtonError = () => {
      if (this._hasInvalidInput()) {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
      } else {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.disabled = false;
      }
    };
  


    enableValidation = () => {
      this._setInputListeners();
    };
    resetValidation() {
      this._toggleButtonError();
      this._inputList.forEach((inputElement) => {
        this._hideError(inputElement);
      });
    }
    
  }