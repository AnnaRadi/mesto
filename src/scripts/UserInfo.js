export default class UserInfo {
    constructor ({nameUserSelector, informationSelector}) {
        this._nameUserSelector = document.querySelector(nameUserSelector);
        this._informationSelector = document.querySelector(informationSelector)
    }

    getUserInfo () {
        return {
            name: this._nameUserSelector.textContent,
            info: this._informationSelector.textContent,
        }
    }
    setUserInfo ({nameInput, jobInput}) {
        this._nameUserSelector.textContent = nameInput;
        this._informationSelector.textContent = jobInput;
        console.log(nameInput, jobInput)
      }
    }
