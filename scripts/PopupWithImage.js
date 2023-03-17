import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this.popup = document.querySelector(popupSelector);
    }
  
    open(name,image) {
      console.log(`попап ${name}`);
      this.popup.querySelector('.name').textContent = name;
      this.popup.querySelector('.image').src = image;
      super.open();
    }
  }
  
  export default PopupWithImage;