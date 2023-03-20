import './pages/index.css';
import Card from "./scripts/Card.js";
import {initialCards, config} from "./scripts/constants.js";
import FormValidator from "./scripts/FormValidator.js";
import Section from "./scripts/Section.js";
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';


const popupProfile = document.querySelector('.popup-profile');
const inputNameProfile = popupProfile.querySelector('.popup__container-input_name_first');
const inputJobProfile = popupProfile.querySelector('.popup__container-input_about_you');
const buttonEditProfile = document.querySelector('.profile-info__edit-button');
const buttonAddProfile = document.querySelector('.profile__add-button');
const formMesto = document.querySelector('.form-mesto');
const formProfile = document.querySelector('.form');

const selectors = {
  template: '#element',
  card: '.element',
  cardImage: '.element__image',
  title: '.element__title',
  buttonLike: '.element__group-title-like',
  buttonDeleteCard: '.element__group-title-delete',
  buttonImage: '.element__image-button'
}
const popupShowImage = new PopupWithImage('.popup-images');
popupShowImage.setEventListeners();

const cardElem = (text, image) => {
  const card = new Card ({text, image,
    likeBtnClickHandler: (event) => {
      event.target.classList.toggle('element__group-title-like_active');
      },
    clickNameHandler: (event) => {
      event.preventDefault();
      console.log(event.target);
      popupShowImage.open(text, image);
    }
  }, selectors);

  const cardElement = card.createItemCard();
  return cardElement;
}

const cardList = new Section({
  items: initialCards,
  render: cardElem
},'.elements'
);

cardList.renderItems();

buttonAddProfile.addEventListener("click", () => { 
  popupForm.open();
  cardFormValidation.resetValidation();
});

const popupForm = new PopupWithForm('.popup-mesto', (item) => {
  const value = {name: item.nameMesto, link: item.linkPicture};
  cardList.addItem(cardElem(value.name, value.link, selectors.template));
  cardFormValidation.resetValidation();
  popupForm.close();
});

popupForm.setEventListeners();

//==============================================================================

const userInfo = new UserInfo({ nameUserSelector: '.profile-info__title', informationSelector: '.profile-info__subtitle' });

const popupProfileForm = new PopupWithForm('.popup-profile', (value) => {
    console.log(value)
    userInfo.setUserInfo(value)});

popupProfileForm.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  profileFormValidation.resetValidation();
  profileFormValidation.enableButton();
  popupProfileForm.open();
  const {name, info} = userInfo.getUserInfo();
  console.log(name, info)
  inputNameProfile.value=name;
  inputJobProfile.value=info;
});

//==========================================================
const cardFormValidation = new FormValidator(config, formMesto);
const profileFormValidation = new FormValidator(config, formProfile);

cardFormValidation.enableValidation();
profileFormValidation.enableValidation();

//==========================================================
