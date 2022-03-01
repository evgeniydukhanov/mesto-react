import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        setUserName(userInfo.name)
        setUserDescription(userInfo.about)
        setUserAvatar(userInfo.avatar)
      })
      .catch(err => `Данные пользователя не получены : ${err}`)

    api.getCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch(err => `Не удалось получить карточки с сервера : ${err}`)
  }, []);

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></div>
        <div className="profile__info">
          <div className="profile__info-text">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__workplace">{userDescription}</p>
          </div>
          <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card}  onCardClick={onCardClick}/>)
        )}
      </section>

    </main>
  )
}
export default Main;