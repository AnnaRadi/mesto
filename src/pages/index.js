import './index.css';
import Card from '../components/Card.js';
import { initialCards, config, selectors } from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from "../components/Section.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const popupProfile = document.querySelector('.popup-profile');
const inputNameProfile = popupProfile.querySelector('.popup__container-input_name_first');
const inputJobProfile = popupProfile.querySelector('.popup__container-input_about_you');
const buttonEditProfile = document.querySelector('.profile-info__edit-button');
const buttonAddProfile = document.querySelector('.profile__add-button');
const formMesto = document.forms["form-mesto"];
const formProfile = document.forms["form-profile"];

const popupShowImage = new PopupWithImage('.popup-images');
popupShowImage.setEventListeners();

const createCard = (data) => {
  const templateClass= selectors.template;
  const card = new Card(data, templateClass, (name, link) => {
    popupShowImage.open(name, link);
  });
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section({
  items: initialCards,
  render: createCard
}, '.elements');

cardList.renderItems();

buttonAddProfile.addEventListener("click", () => {
  cardPopup.open();
  formValidators['form-mesto'].resetValidation();
});

const cardPopup = new PopupWithForm('.popup-mesto', (item) => {
  const value = { name: item.nameMesto, link: item.linkPicture };
  cardList.addItem(createCard(value.name, value.link, selectors.template));
  cardPopup.close();
});

cardPopup.setEventListeners();

//==============================================================================

const userInfo = new UserInfo({ nameUserSelector: '.profile-info__title', informationSelector: '.profile-info__subtitle' });

const popupProfileForm = new PopupWithForm('.popup-profile', (value) => {
  console.log(value)
  userInfo.setUserInfo(value)
});

popupProfileForm.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  formValidators['form-profile'].resetValidation();
  // profileFormValidation.enableButton();
  popupProfileForm.open();
  const { name, info } = userInfo.getUserInfo();
  console.log(name, info)
  inputNameProfile.value = name;
  inputJobProfile.value = info;
});

//==========================================================


const formValidators = {}

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config,formElement)
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

    // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);



// const cardFormValidation = new FormValidator(config, formMesto);
// const profileFormValidation = new FormValidator(config, formProfile);

// cardFormValidation.enableValidation();
// profileFormValidation.enableValidation();

//==========================================================
