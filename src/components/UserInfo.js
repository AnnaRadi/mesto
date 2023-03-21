export default class UserInfo {
    constructor({ nameUserElement, informationElement }) {
        this._nameUserElement = document.querySelector(nameUserElement);
        this._informationElement = document.querySelector(informationElement)
    }

    getUserInfo() {
        return {
            name: this._nameUserElement.textContent,
            info: this._informationElement.textContent,
        }
    }
    setUserInfo({ nameInput, jobInput }) {
        this._nameUserElement.textContent = nameInput;
        this._informationElement.textContent = jobInput;
        console.log(nameInput, jobInput)
    }
}
