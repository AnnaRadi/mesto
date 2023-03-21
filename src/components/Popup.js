export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);

    this.__handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keyup', (event) => this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__container-close')) {
        this.close();
      }
    });
  }
}