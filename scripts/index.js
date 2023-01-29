const popup_profile = document.querySelector('.popup-profile');
const popup_mesto = document.querySelector('.popup-mesto');
const Edit_button = document.querySelector('.profile-info__edit-button');
const add_button = document.querySelector('.profile__add-button'); 
const title=document.querySelector('.profile-info__title');
const subtitle=document.querySelector('.profile-info__subtitle');
const nameInput = popup_profile.querySelector('.popup__container-input_name_first');
const jobInput = popup_profile.querySelector('.popup__container-input_about_you');
const close_profile = popup_profile.querySelector('.popup__container-close_profile');
const close_mesto = popup_mesto.querySelector('.popup__container-close_mesto');
const formElement = document.querySelector('.popup__container'); 
const popup_images = document.querySelector('.popup-images');
const Template = document.querySelector('#element').content; //нашли Template
const Container = document.querySelector('.elements');
const title_mesto=document.querySelector('.element__title');
const image_mesto=document.querySelector('.element__image');
const titleInput = document.querySelector('.popup__container-input_name_mesto');
const imageInput = document.querySelector('.popup__container-input_link_picture');
const formElement_mesto = document.querySelector('.popup__container-create');
const form_mesto = document.querySelector('.form-mesto');
const closeImages = document.querySelector('.popup__container-close-images');

Edit_button.addEventListener("click",OpenForm);
close_profile.addEventListener("click",CloseForm);
formElement.addEventListener('submit', handleFormSubmit);
add_button.addEventListener("click",OpenFormMesto);
close_mesto.addEventListener("click",CloseFormMesto);

function OpenFormImages(e){
  popup_images.classList.toggle('popup_opened');
  console.log(e.target);
  popup_images.querySelector('.popup__image').src = e.target.src
  popup_images.querySelector('.popup__image-title').textContent = e.target.closest('.element').querySelector('.element__title').textContent;
  closeImages.addEventListener("click",CloseFormImages);
};

function CloseFormImages() {
  popup_images.classList.toggle('popup_opened');
}

function OpenFormMesto() {
    popup_mesto.classList.toggle('popup_opened');
    form_mesto.reset();
}

function OpenForm() {
    popup_profile.classList.toggle('popup_opened');
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;
}

function CloseFormMesto() {
    popup_mesto.classList.toggle('popup_opened');
}

function CloseForm() {
    popup_profile.classList.toggle('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    popup_profile.classList.toggle('popup_opened');
}

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
    
  function createCards(create_title, create_images){
    const userElement = Template.querySelector('.element').cloneNode(true);// клонируем содержимое Template (карточку)
    userElement.querySelector('.element__title').textContent=create_title;
    userElement.querySelector('.element__image').src=create_images;
    const like = userElement.querySelector('.element__group-title-like')
    const delete_card = userElement.querySelector('.element__group-title-delete')
    const image_button = userElement.querySelector('.element__image-button')
    like.addEventListener('click', function(evt) {
      evt.target.classList.toggle('element__group-title-like_active');
    });
    delete_card.addEventListener('click', function(evt) {
      userElement.remove();
    });
    image_button.addEventListener('click', OpenFormImages)
      
    Container.append(userElement);
  }
  
  initialCards.forEach(card => {
    createCards(card.name, card.link)
    });

    formElement_mesto.addEventListener('click', (evt)=> {
      evt.preventDefault();
      const title=titleInput.value
      const image= imageInput.value
      const card = Template.querySelector('.element').cloneNode(true);
      card.querySelector('.element__title').textContent=title;
      card.querySelector('.element__image').src=image;
      Container.append(card)
      popup_mesto.classList.toggle('popup_opened');
      const like = card.querySelector('.element__group-title-like')
      const delete_card = card.querySelector('.element__group-title-delete')
      const image_button = card.querySelector('.element__image-button')
      like.addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__group-title-like_active');
      });
      delete_card.addEventListener('click', function(evt) {
        card.remove();
      });
      image_button.addEventListener('click', OpenFormImages)
    });
 