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
    popup_pofile.classList.toggle('popup_opened');
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

  const Container = document.querySelector('.elements');
  function createCards(create_title, create_images){
    const Template = document.querySelector('#element').content; //нашли Template
    const userElement = Template.querySelector('.element').cloneNode(true);// клонируем содержимое Template (карточку)
    userElement.querySelector('.element__title').textContent=create_title;
    userElement.querySelector('.element__image').src=create_images;
    const like = Template.querySelectorAll('.element__group-title-like')
    like.forEach(function(like){
    like.addEventListener('click', function (evt) {
      evt.target.classList.toggle('.element__group-title-like_active');
      });
});
    Container.append(userElement);
  }
  
  initialCards.forEach(card => {
    createCards(card.name, card.link)
    });

    //let title_mesto=document.querySelector('.element__title');
    //let image_mesto=document.querySelector('.element__image');
    //let titleInput = document.querySelector('.popup__container-input_name_mesto');
    //let imageInput = document.querySelector('.popup__container-input_link_picture');
    //let formElement_mesto = document.querySelector('.popup-mesto__container-card'); 
    //formElement_mesto.addEventListener('submit', Newcard);
    
    //function Newcard(evt) {
      //evt.preventDefault(); 
      //const title_mesto=titleInput.value;
      //const image_mesto.src=imageInput.value;
      //const card=createCards({title:titleInput.value, image:imageInput.value});
      //Container.append(card);
 //}