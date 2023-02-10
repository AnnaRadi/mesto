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
const cardMesto = document.querySelector('.popup-mesto__container-card');
const popupImage = document.querySelector('.popup-images');
const imageCard=popupImage.querySelector('.popup__image');
const titleImage=popupImage.querySelector('.popup__image-title');
const template = document.querySelector('#element').content;
const containerElement = document.querySelector('.elements');
const titleMesto = document.querySelector('.element__title');
const imageMesto = document.querySelector('.element__image');
const inputTitleMesto = document.querySelector('.popup__container-input_name_mesto');
const inputImageMesto = document.querySelector('.popup__container-input_link_picture');
const formElementMesto = document.querySelector('.popup__container-create');
const formMesto = document.querySelector('.form-mesto');
const buttonCloseImages = popupImage.querySelector('.popup__container-close-images');

createCardsMesto()

function createCardsMesto() { 
  const cards = initialCards.map((item) => {
    return  createItemCard(item)
});
containerElement.append(...cards);
}

function createItemCard(item) {
  const card = template.querySelector('.element').cloneNode(true);
  const cardImage = card.querySelector('.element__image')
  card.querySelector('.element__title').textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt=item.name;
  
  const buttonLike =  card.querySelector('.element__group-title-like')
  const buttonDeleteCard =  card.querySelector('.element__group-title-delete')
  const buttonImage =  card.querySelector('.element__image-button')
  
  buttonLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__group-title-like_active');
  });

  buttonDeleteCard.addEventListener('click', function (evt) {
    card.remove();
  });

  buttonImage.addEventListener('click', (e) => {
    openPopup(popupImage);
    console.log(e.target);
    imageCard.src = e.target.src
    titleImage.textContent = e.target.closest('.element').querySelector('.element__title').textContent;
    imageCard.alt = titleImage.textContent;
    console.log(imageCard.alt);
  });
  return card;
}

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
  const errorsProfile = popupProfile.querySelectorAll(".error")
  errorsProfile.forEach((error) => {
    error.textContent = '';
  });
  const inputsProfile = popupProfile.querySelectorAll(".popup__container-input");
  inputsProfile.forEach((input) => {
    input.classList.remove("popup__container-input_type_error");
  });
  buttonSaveProfile.classList.remove("popup__container-button_disabled");
  buttonSaveProfile.disabled = false;
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
  formElementMesto.classList.add("popup__container-button_disabled");
  formElementMesto.disabled = true;
  const errorsMesto = popupMesto.querySelectorAll(".error")
  errorsMesto.forEach((error) => {
    error.textContent = '';
  });
  const inputsMesto = popupMesto.querySelectorAll(".popup__container-input");
  inputsMesto.forEach((input) => {
    input.classList.remove("popup__container-input_type_error");
  });
});

function openPopup(popupGeneral) { 
  popupGeneral.classList.toggle('popup_opened');
  document.addEventListener("keydown", keyHandlerEsc);
}

function closePopup(popupGeneral) { 
  popupGeneral.classList.toggle('popup_opened');
  document.removeEventListener("keydown", keyHandlerEsc);
}

cardMesto.addEventListener('submit', (evt) => { 
  evt.preventDefault();
  const name = inputTitleMesto.value
  const link = inputImageMesto.value
  const card = create({name:name, link:link});
  containerElement.prepend(card);
  closePopup(popupMesto)
});
