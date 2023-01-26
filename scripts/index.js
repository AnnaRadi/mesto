let popup_pofile = document.querySelector('.popup-pofile');
let popup_mesto = document.querySelector('.popup-mesto');
let Edit_button = document.querySelector('.profile-info__edit-button');
let add_button = document.querySelector('.profile__add-button'); 
let title=document.querySelector('.profile-info__title');
let subtitle=document.querySelector('.profile-info__subtitle');
let nameInput = document.querySelector('.popup__container-input_name_first');
let jobInput = document.querySelector('.popup__container-input_about_you');
let close_profile = document.querySelector('.popup__container-close_profile');
let close_mesto = document.querySelector('.popup__container-close_mesto');
let formElement = document.querySelector('.popup__container'); 
const like=document.querySelectorAll('.element__group-title-like')

Edit_button.addEventListener("click",OpenForm);
close_profile.addEventListener("click",CloseForm);
formElement.addEventListener('submit', handleFormSubmit);
add_button.addEventListener("click",OpenFormMesto);
close_mesto.addEventListener("click",CloseFormMesto);

function OpenFormMesto() {
    popup_mesto.classList.toggle('popup_opened');
}

function OpenForm() {
    popup_pofile.classList.toggle('popup_opened');
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;
}

function CloseFormMesto() {
    popup_mesto.classList.toggle('popup_opened');
}

function CloseForm() {
    popup_pofile.classList.toggle('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    popup.classList.toggle('popup_opened');
}

like.forEach(function(like){
    like.addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__group-title-like_active');
      });

});

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

  const Container = document.querySelector('.elements');
  initialCards.forEach(function(image, title){
    const Template = document.querySelector('#element').content; //нашли Template
    const userElement = Template.querySelector('.element').cloneNode(true);// клонируем содержимое Template (карточку)
    userElement.querySelector('.element__image').src=initialCards.link;
    userElement.querySelector('.element__title').textContent=initialCards.name;
    Container.append(userElement);
  });
