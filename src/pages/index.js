import './index.css';
import Card from '../components/Card.js';
import {
  initialCards,
  config,
  selectors,
  inputNameProfile,
  inputJobProfile,
  buttonEditProfile,
  buttonAddProfile,
  formMesto,
  popupAvatarButton,
  formAvatar,
  formProfile
} from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from "../components/Section.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { Api } from '../components/Api.js';
import UserInfo from '../components/UserInfo.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';


const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-63",
  headers: {
    "Content-Type": "application/json",
    authorization: "47a79e91-e1f8-4d50-bfff-9e3aae581f27"
  }
});
const cards = api.getAllCards();
cards.then(data => {
  cardList.setItems(data);
  cardList.renderItems();
})

const profile = api.getUserInfo();
profile.then((data) => {
  const { name, about, avatar, _id } = data;
  userInfo.setUserId(_id);
  userInfo.setUserInfo({ name, about });
  userInfo.setUserAvatar({ avatar });
})


const popupShowImage = new PopupWithImage('.popup-images');
popupShowImage.setEventListeners();

const createCard = (data) => {
  const templateClass = selectors.template;
  const card = new Card(data, templateClass, (name, link) => {
    popupShowImage.open(name, link);
  },
    userInfo.getUserId(),
    (cardId) => {
      api.takeLike(cardId)
        .then((data) => {
          console.log(data)
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, () => {
      popupDeleteConfirmation.open();
      popupDeleteConfirmation.setSubmitCallback(() => {
        const id = card.getCardId();
        api.deleteCard(id)
          .then(() => {
            popupDeleteConfirmation.close();
            card.deleteElement()
          })
          .catch((err) => {
            console.log(err);
          });
      })
    });
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section({
  items: [],
  render: createCard
}, '.elements');

buttonAddProfile.addEventListener("click", () => {
  cardPopup.open();
  cardFormValidation.resetValidation();
});

const cardPopup = new PopupWithForm('.popup-mesto', (item) => {
  const value = { name: item.nameMesto, link: item.linkPicture };
  cardPopup.renderLoading(true);
  console.log(item.nameMesto, item.linkPicture);
  api.addNewCard(value)
    .then((data) => {
      cardList.addItem(createCard(data))
      cardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => cardPopup.renderLoading(false));
});

cardPopup.setEventListeners();

//==============================================================================

const userInfo = new UserInfo({ nameUserElement: '.profile-info__title', informationElement: '.profile-info__subtitle', avatarUserElement: '.profile__avatar-images' });

const popupDeleteConfirmation = new PopupWithConfirmation('.popup-delete');
popupDeleteConfirmation.setEventListeners();

const popupProfileForm = new PopupWithForm('.popup-profile', (value) => {
  console.log(value)
  popupProfileForm.renderLoading(true);
  api.editProfile(value)
    .then((value) => {
      console.log(value)
      userInfo.setUserInfo(value)
    })
    .finally(() => popupProfileForm.renderLoading(false));
});

popupProfileForm.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  profileFormValidation.resetValidation();
  profileFormValidation.enableButton();
  popupProfileForm.open();
  const { name, about } = userInfo.getUserInfo();
  console.log(name, about)
  inputNameProfile.value = name;
  inputJobProfile.value = about;
});

const popupAvatarForm = new PopupWithForm('.popup-avatar', (data) => {
  popupAvatarForm.renderLoading(true);
  api.editProfileAvatar(data)
  .then((data) => {
      console.log({ avatar: data.avatar})
      userInfo.setUserAvatar({ avatar: data.avatar})
      popupAvatarForm.close();
  })
  .catch((err) => {
      console.log(err);
  })
  .finally(() => popupAvatarForm.renderLoading(false));
});

popupAvatarForm.setEventListeners();

function handleAvatarClick() {
  popupAvatarForm.open();
  avatarFormValidation.resetValidation();
}

popupAvatarButton.addEventListener('click', handleAvatarClick);

//==========================================================


const cardFormValidation = new FormValidator(config, formMesto);
const profileFormValidation = new FormValidator(config, formProfile);
const avatarFormValidation = new FormValidator(config, formAvatar);

cardFormValidation.enableValidation();
profileFormValidation.enableValidation();
avatarFormValidation.enableValidation();

//==========================================================
