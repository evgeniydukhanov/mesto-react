import React from 'react'


function Main(props) {

    return (
        <main className="content">

      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar}></div>
        <div className="profile__info">
          <div className="profile__info-text">
            <h1 className="profile__name"></h1>
            <p className="profile__workplace"></p>
          </div>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
      </section>

    </main>
    )
}
export default Main;