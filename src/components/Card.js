import {selectors} from '../utils/constants.js'
class Card {

  constructor(data, templateSelector, handleCardClick, openImage) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._openImage = openImage;
  };

  _getCardTemplate() {
    const item = document.querySelector(this._templateSelector).content.cloneNode(true);
    return item;
  }
// ==================================
generateCard() {
    this._element =this._getCardTemplate();
    const cardImage = this._element.querySelector(selectors.cardImage);
    const cardTitle = this._element.querySelector(selectors.title);
    this._setEventListeners();

    cardTitle.textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    return this._element;
  }
// ===========
  _setEventListeners() {

    const buttonLike = this._element.querySelector(selectors.buttonLike);

    buttonLike.addEventListener('click', () => {
      buttonLike.classList.toggle('element__group-title-like_active');
    });


    const buttonDeleteCard = this._element.querySelector(selectors.buttonDeleteCard);

    buttonDeleteCard.addEventListener('click', () => { 
      console.log(this._element)
      this._buttonDeleteHandle();
    });
    
    const buttonImage = this._element.querySelector(selectors.buttonImage);

    buttonImage.addEventListener('click', () => {
      this._openImage(this._name, this._link);
    });
  }

  _buttonDeleteHandle() {
    console.log(this._element)
    this._element.remove()
  };

}
export default Card;