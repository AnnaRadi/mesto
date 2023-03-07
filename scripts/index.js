import Card from "./Card.js";
import {initialCards, config} from "./constants.js";
import FormValidator from "./FormValidator.js";

const popupGeneral = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup-profile');
const buttonSaveProfile = popupProfile.querySelector(".popup__container-save");
const inputNameProfile = popupProfile.querySelector('.popup__container-input_name_first');
const inputJobProfile = popupProfile.querySelector('.popup__container-input_about_you');
const buttonCloseProfile = popupProfile.querySelector('.popup__container-close_profile');
const popupMesto = document.querySelector('.popup-mesto');
const buttonCloseMesto = popupMesto.querySelector('.popup__container-close_mesto');
const buttonEditProfile = document.querySelector('.profile-info__edit-button');
const buttonAddProfile = document.querySelector('.profile__add-button');
const titleProfile = document.querySelector('.profile-info__title');
const subtitleProfile = document.querySelector('.profile-info__subtitle');
const formElementProfile = document.querySelector('.popup__container');
const formAddCard = document.querySelector('.popup-mesto__container-card');
const popupImage = document.querySelector('.popup-images');
const imageCard=popupImage.querySelector('.popup__image');
const titleImage=popupImage.querySelector('.popup__image-title');
const containerElement = document.querySelector('.elements');
const inputTitleMesto = document.querySelector('.popup__container-input_name_mesto');
const inputImageMesto = document.querySelector('.popup__container-input_link_picture');
const formElementMesto = document.querySelector('.popup__container-create');
const formMesto = document.querySelector('.form-mesto');
const formProfile = document.querySelector('.form');
const buttonCloseImages = popupImage.querySelector('.popup__container-close-images');


const selectors = {
  template: '#element',
  card: '.element',
  cardImage: '.element__image',
  title: '.element__title',
  buttonLike: '.element__group-title-like',
  buttonDeleteCard: '.element__group-title-delete',
  buttonImage: '.element__image-button'
}


function renderInitialCards(text,image) { 
  const card = new Card ({text, image,
  likeBtnClickHandler: (event) => {
    event.target.classList.toggle('element__group-title-like_active');
    },
  clickNameHandler: (event) => {
    event.preventDefault();
    console.log(event.target);
    openPopup(popupImage);
    imageCard.src = event.target.src
    titleImage.textContent = event.target.closest('.element').querySelector('.element__title').textContent;
    imageCard.alt = titleImage.textContent;
    console.log(imageCard.alt);
  }
}, selectors);
  
  return containerElement.prepend(card.createItemCard());
}

initialCards.forEach((item) => {
  renderInitialCards(item.name, item.link)
}); 

//==========================================================
const mestoFormValidation = new FormValidator(config, formMesto);
const profileFormValidation = new FormValidator(config, formProfile);

mestoFormValidation.enableValidation();
profileFormValidation.enableValidation();

//==========================================================
function keyHandlerEsc(evt) {
  if (evt.key === "Escape") {
  const formOpen=document.querySelector(".popup_opened")
  closePopup(formOpen);
  }
}

popupMesto.addEventListener("click", (e) => {
  if(e.target===popupMesto || e.target===buttonCloseMesto){
    closePopup(popupMesto);
  }
});

popupProfile.addEventListener("click", (e) => {
  if(e.target===popupProfile || e.target===buttonCloseProfile){
    closePopup(popupProfile);
  }
});

popupImage.addEventListener("click", (e) => {
  if(e.target===popupImage || e.target===buttonCloseImages){
    closePopup(popupImage);
  }
})

buttonEditProfile.addEventListener("click", () => { 
  openPopup(popupProfile);
  inputNameProfile.value = titleProfile.textContent;
  inputJobProfile.value = subtitleProfile.textContent;
  profileFormValidation.enableValidation(); 
});

formElementProfile.addEventListener('submit', (evt) => { 
  evt.preventDefault();
  titleProfile.textContent = inputNameProfile.value;
  subtitleProfile.textContent = inputJobProfile.value;
  closePopup(popupProfile);
});


buttonAddProfile.addEventListener("click", () => { 
  openPopup(popupMesto);
  formMesto.reset();
  mestoFormValidation.removeValidationErrors();
  mestoFormValidation.enableValidation();
});

function openPopup(popupGeneral) { 
  popupGeneral.classList.toggle('popup_opened');
  document.addEventListener("keydown", keyHandlerEsc);
}

function closePopup(popupGeneral) { 
  popupGeneral.classList.toggle('popup_opened');
  document.removeEventListener("keydown", keyHandlerEsc);
}

formAddCard.addEventListener('submit', (evt) => { 
  evt.preventDefault();
  const name = inputTitleMesto.value
  const link = inputImageMesto.value
  const card = renderInitialCards(name, link);
  closePopup(popupMesto)
});
