import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import '../index.css';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: '', link: '' })
  }
  function handleCardClick(cardInfo) {
    setSelectedCard({ name: cardInfo.name, link: cardInfo.link });
  }
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          title='Редактировать профиль'
          name='info'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="input-name"
            className="popup__input-text popup__input-text_type_name"
            type="text" name="name"
            defaultValue=""
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span id='input-name-error'
            className="error">
            Вы пропустили это поле
          </span>
          <input id="input-workplace"
            className="popup__input-text popup__input-text_type_workplace"
            type="text"
            name="about"
            defaultValue=""
            placeholder="Род занятий"
            minLength="2"
            maxLength="200"
            required />
          <span
            id='input-workplace-error'
            className="error">
            Вы пропустили это поле
          </span>
          <button
            className="popup__save-button"
            type="submit">
            Сохранить
          </button>
        </PopupWithForm>
        <PopupWithForm
          title='Новое место'
          name='place'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input id="name-card"
            className="popup__input-text popup__input-text_type_placeName"
            type="text" name="placeName"
            defaultValue=""
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span
            id='name-card-error'
            className="error">
            Вы пропустили это поле
          </span>
          <input
            id="name-link"
            className="popup__input-text popup__input-text_type_placeLink"
            type="url"
            name="placeLink"
            defaultValue="" placeholder="Ссылка на картинку"
            required />
          <span
            id='name-link-error'
            className="error">
            Введите адрес сайта
          </span>
          <button
            className="popup__save-button popup__add-button"
            type="submit">
            Создать
          </button>
        </PopupWithForm>
        <PopupWithForm
          title='Обновить аватар'
          name='avatar'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="avatar-link"
            className="popup__input-text popup__input-text_type_avatarLink"
            type="url"
            name="avatar"
            defaultValue=""
            placeholder="Ссылка на изображение"
            required
          />
          <span
            id='avatar-link-error'
            className="error">
            Введите адрес сайта
          </span>
          <button
            className="popup__save-button popup__add-button"
            type="submit">
            Сохранить
          </button>
        </PopupWithForm>
        <PopupWithForm
          title='Вы уверены?'
          name='element'>
          <button
            className="popup__save-button"
            type="submit">
            Да
          </button>
        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
