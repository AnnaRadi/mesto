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
const popupImages = document.querySelector('.popup-images');
const Template = document.querySelector('#element').content; //нашли Template
const Container = document.querySelector('.elements');
const titleMesto = document.querySelector('.element__title');
const imageMesto = document.querySelector('.element__image');
const titleInput = document.querySelector('.popup__container-input_name_mesto');
const imageInput = document.querySelector('.popup__container-input_link_picture');
const formElement_mesto = document.querySelector('.popup__container-create');
const formMesto = document.querySelector('.form-mesto');
const closeImages = document.querySelector('.popup__container-close-images');
const imageCard=popupImages.querySelector('.popup__image')
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function createCards(createTitle, createImages) { //рисуем карточки при загрузке
  const userElement = Template.querySelector('.element').cloneNode(true);// клонируем содержимое Template (карточку)
  userElement.querySelector('.element__title').textContent = createTitle;
  userElement.querySelector('.element__image').src = createImages;
  const like = userElement.querySelector('.element__group-title-like')
  const delete_card = userElement.querySelector('.element__group-title-delete')
  const image_button = userElement.querySelector('.element__image-button')
  like.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__group-title-like_active');
  });
  delete_card.addEventListener('click', function (evt) {
    userElement.remove();
  });
  image_button.addEventListener('click', (e) => {
    openPopup(popupImages);
    console.log(e.target);
    imageCard.src = e.target.src
    popupImages.querySelector('.popup__image-title').textContent = e.target.closest('.element').querySelector('.element__title').textContent;
    closeImages.addEventListener("click", () => {
      closePopup(popupImages);
    });
  });
  Container.append(userElement);
}

initialCards.forEach(card => { // добавляем карточки на сайт
  createCards(card.name, card.link)
});

editButton.addEventListener("click", () => { //открытие редактирования профиля
  openPopup(popupProfile);
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
});

closeProfile.addEventListener("click", () => { //закрытие редактирования профиля
  closePopup(popupProfile);
});

formElement.addEventListener('submit', (evt) => { //сохранить редактирования профиля
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  openPopup(popupProfile);
});


addButton.addEventListener("click", () => { //открытие формы добавить карточку
  openPopup(popupMesto);
  formMesto.reset();
});

closeMesto.addEventListener("click", () => { //закрытие формы добавить карточку
  closePopup(popupMesto);
});

function openPopup(popup) { //общий попап открыть
  popup.classList.toggle('popup_opened');
}

function closePopup(popup) { //общий попап закрыть
  popup.classList.toggle('popup_opened');
}

formElement_mesto.addEventListener('click', (evt) => { //добавить карточку (кнопка создать)
  evt.preventDefault();
  const title = titleInput.value
  const image = imageInput.value
  const card = Template.querySelector('.element').cloneNode(true);
  card.querySelector('.element__title').textContent = title;
  card.querySelector('.element__image').src = image;
  Container.prepend(card)
  popupMesto.classList.toggle('popup_opened');
  const like = card.querySelector('.element__group-title-like')
  const delete_card = card.querySelector('.element__group-title-delete')
  const image_button = card.querySelector('.element__image-button')
  like.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__group-title-like_active');
  });
  delete_card.addEventListener('click', function (evt) {
    card.remove();
  });
  image_button.addEventListener('click', ()=> {
    closePopup(popupImages);
  })
});
