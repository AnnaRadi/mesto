export default class Popup {
    constructor (selector){
        this._popup = document.querySelector(selector);    
    }

  _handleEscPress(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }
  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keyup', (event) => this._handleEscPress(event));
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscPress);
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (event) => {
      this.close();
    });
  }
}