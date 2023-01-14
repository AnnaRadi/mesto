console.log("Hello!");
let popup = document.querySelector('.popup');
popup.classList.toggle('popup_opened');

let Edit_button = document.querySelector('.profile-info__Edit-button');
Edit_button.addEventListener("click",OpenForm);

function OpenForm() {
    popup.classList.toggle('popup_opened');
}

let close = document.querySelector('.popup__container-close');
close.addEventListener("click",CloseForm);

function CloseForm() {
    popup.classList.toggle('popup_opened');
}
