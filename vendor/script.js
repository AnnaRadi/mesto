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

// Находим форму в DOM
let formElement = document.querySelector('.popup__container'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.container-input-Name');// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.container-input-aboutYou')// Воспользуйтесь инструментом .querySelector()

let container_save = document.querySelector('.popup__container-save');
container_save.addEventListener("click",handleFormSubmit);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    document.getElementById("nameInput").value;
    document.getElementById("jobInput").value;// Получите значение полей jobInput и nameInput из свойства value

    let title=document.querySelector('.profile-info__title');
    let subtitle=document.querySelector('.profile-info__subtitle');
    // Выберите элементы, куда должны быть вставлены значения полей

    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    // Вставьте новые значения с помощью textContent
    let popup = document.querySelector('.popup');
    popup.classList.toggle('popup_opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

