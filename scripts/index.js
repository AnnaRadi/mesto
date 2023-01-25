let popup = document.querySelector('.popup');
let popup_mesto = document.querySelector('.popup-mesto');
let Edit_button = document.querySelector('.profile-info__edit-button');
let add_button = document.querySelector('.profile__add-button'); 
let title=document.querySelector('.profile-info__title');
let subtitle=document.querySelector('.profile-info__subtitle');
let nameInput = document.querySelector('.popup__container-input_name_first');
let jobInput = document.querySelector('.popup__container-input_about_you');
let close = document.querySelector('.popup__container-close');
let formElement = document.querySelector('.popup__container'); 

Edit_button.addEventListener("click",OpenForm);
close.addEventListener("click",CloseForm);
formElement.addEventListener('submit', handleFormSubmit);
add_button.addEventListener("click",OpenFormMesto);

function OpenFormMesto() {
    popup_mesto.classList.toggle('popup_opened');
}

function OpenForm() {
    popup.classList.toggle('popup_opened');
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;
}

function CloseForm() {
    popup.classList.toggle('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    popup.classList.toggle('popup_opened');
}


