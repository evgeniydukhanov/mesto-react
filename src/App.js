import headerLogo from './images/headerlogo.svg'

function App() {
  return (
<body className="body">
  <div className="page">
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="логотип"/>
    </header>
    <main className="content">

      <section className="profile">
        <div className="profile__avatar"></div>
        <div className="profile__info">
          <div className="profile__info-text">
            <h1 className="profile__name"></h1>
            <p className="profile__workplace"></p>
          </div>
          <button className="profile__edit-button" type="button"></button>
        </div>
        <button className="profile__add-button" type="button"></button>
      </section>

      <section className="elements">
      </section>

    </main>
    <footer className="footer">
      <p className="footer__copyright">© 2020 Mesto Russia</p>
    </footer>
    <div className="popup popup_type_info">
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <button className="popup__close-button" type="button"></button>
        <p className="popup__heading">Редактировать профиль</p>
        <form className="popup__input popup__input_info" name="infoInput">
          <input id="input-name" className="popup__input-text popup__input-text_type_name" type="text" name="name"
            value="" placeholder="Имя" minlength="2" maxlength="40" required/>
          <span id='input-name-error' className="error">Вы пропустили это поле</span>
          <input id="input-workplace" className="popup__input-text popup__input-text_type_workplace" type="text"
            name="about" value="" placeholder="Род занятий" minlength="2" maxlength="200" required/>
          <span id='input-workplace-error' className="error">Вы пропустили это поле</span>
          <button className="popup__save-button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_place">
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <button className="popup__close-button" type="button"></button>
        <p className="popup__heading">Новое место</p>
        <form className="popup__input popup__input_place" name="placeInput">
          <input id="name-card" className="popup__input-text popup__input-text_type_placeName" type="text" name="placeName"
            value="" placeholder="Название" minlength="2" maxlength="30" required/>
          <span id='name-card-error' className="error">Вы пропустили это поле</span>
          <input id="name-link" className="popup__input-text popup__input-text_type_placeLink" type="url" name="placeLink"
            value="" placeholder="Ссылка на картинку" required/>
          <span id='name-link-error' className="error">Введите адрес сайта</span>
          <button className="popup__save-button popup__add-button" type="submit">Создать</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_pic">
      <div className="popup__overlay"></div>
      <div className="popup__pic-container">
        <button className="popup__close-button" type="button"></button>
        <img className="popup__big-picture" src="#" alt="#"/>
        <p className="popup__pic-caption"></p>
      </div>
    </div>
    <div className="popup popup_type_element">
      <div className="popup__overlay"></div>
      <div className="popup__element-container">
        <button className="popup__close-button" type="button"></button>
        <p className="popup__heading">Вы уверены?</p>
        <form className ="delete-form">
        <button className="popup__save-button" type="submit">Да</button>
      </form>
      </div>
    </div>
    <div className="popup popup_type_avatar">
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <button className="popup__close-button" type="button"></button>
        <p className="popup__heading">Обновить аватар</p>
        <form className="popup__input popup__input_place" name="placeInput">
          <input id="avatar-link" className="popup__input-text popup__input-text_type_avatarLink" type="url" name="avatar"
            value="" placeholder="Ссылка на изображение" required/>
          <span id='avatar-link-error' className="error">Введите адрес сайта</span>
          <button className="popup__save-button popup__add-button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    <template id="cardTemplate" className="template__card">
      <div className="element">
        <img className="element__pic" src="#" alt=""/>
        <button className="element__delete"></button>
        <div className="element__caption">
          <p className="element__title"></p>
          <div className="element__like_area">
            <button className="element__button" type="button"></button>
            <p className="element__like_counter"></p>
        </div>
        </div>
      </div>
    </template>
  </div>
</body>
  );
}

export default App;
