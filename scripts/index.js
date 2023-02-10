const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup-profile');
const popupMesto = document.querySelector('.popup-mesto');
const editButton = document.querySelector('.profile-info__edit-button');
const addButton = document.querySelector('.profile__add-button');
const title = document.querySelector('.profile-info__title');
const subtitle = document.querySelector('.profile-info__subtitle');
const nameInput = popupProfile.querySelector('.popup__container-input_name_first');
const jobInput = popupProfile.querySelector('.popup__container-input_about_you');
const closeProfile = popupProfile.querySelector('.popup__container-close_profile');
const closeMesto = popupMesto.querySelector('.popup__container-close_mesto');
const formElement = document.querySelector('.popup__container');
const formContainerMesto = document.querySelector('.popup-mesto__container-card');
const popupImages = document.querySelector('.popup-images');
const template = document.querySelector('#element').content; 
const container = document.querySelector('.elements');
const titleMesto = document.querySelector('.element__title');
const imageMesto = document.querySelector('.element__image');
const titleInput = document.querySelector('.popup__container-input_name_mesto');
const imageInput = document.querySelector('.popup__container-input_link_picture');
const formElementMesto = document.querySelector('.popup__container-create');
const formMesto = document.querySelector('.form-mesto');
const closeImages = document.querySelector('.popup__container-close-images');
const imageCard=popupImages.querySelector('.popup__image');
const imageTitle=popupImages.querySelector('.popup__image-title')

createCards()

function createCards() { 
  const cards= initialCards.map((item) => {
    return  create(item)
});
container.append(...cards);
}

function create(item) {
  const card = template.querySelector('.element').cloneNode(true);
  card.querySelector('.element__title').textContent = item.name;
  card.querySelector('.element__image').src = item.link;
  card.querySelector('.element__image').alt=item.name;
  
  const like =  card.querySelector('.element__group-title-like')
  const deleteCard =  card.querySelector('.element__group-title-delete')
  const imageButton =  card.querySelector('.element__image-button')
  
  like.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__group-title-like_active');
  });

  deleteCard.addEventListener('click', function (evt) {
    card.remove();
  });

  imageButton.addEventListener('click', (e) => {
    openPopup(popupImages);
    console.log(e.target);
    imageCard.src = e.target.src
    imageTitle.textContent = e.target.closest('.element').querySelector('.element__title').textContent;
  });
  return card;
}

document.addEventListener("keydown", keyHandlerEsc);


function keyHandlerEsc(evt) {
  if (evt.key === "Escape") {
    const openForm=document.querySelector(".popup_opened")
    closePopup(openForm);
  }
}

function closePopup(popup) { 
  popup.classList.toggle('popup_opened');
}

popupMesto.addEventListener("click", (e) => {
  if(e.target===popupMesto || e.target===closeMesto){
    closePopup(popupMesto);
  }
});

popupProfile.addEventListener("click", (e) => {
  if(e.target===popupProfile || e.target===closeProfile){
    closePopup(popupProfile);
  }
});

popupImages.addEventListener("click", (e) => {
  if(e.target===popupImages || e.target===closeImages){
    closePopup(popupImages);
  }
})

editButton.addEventListener("click", () => { 
  openPopup(popupProfile);
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
});

formElement.addEventListener('submit', (evt) => { 
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(popupProfile);
});


addButton.addEventListener("click", () => { 
  openPopup(popupMesto);
  formMesto.reset();
});

function openPopup(popup) { 
  popup.classList.toggle('popup_opened');
}

function closePopup(popup) { 
  popup.classList.toggle('popup_opened');
}

formContainerMesto.addEventListener('submit', (evt) => { 
  evt.preventDefault();
  const name = titleInput.value
  const link = imageInput.value
  const card = create({name:name, link:link});
  container.prepend(card);
  closePopup(popupMesto)
});
