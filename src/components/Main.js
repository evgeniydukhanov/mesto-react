function Main() {
    function handleEditAvatarClick(){
        const popupAvatar = document.querySelector(".popup_type_avatar");
        popupAvatar.classList.add("popup_opened");
    }
    function handleEditProfileClick(){
        const popupProfile = document.querySelector(".popup_type_info");
        popupProfile.classList.add("popup_opened");
    }
    function handleAddPlaceClick(){
        const popupPlace = document.querySelector(".popup_type_place");
        popupPlace.classList.add("popup_opened");
    }
    return (
        <main className="content">

      <section className="profile">
        <div className="profile__avatar" onClick={handleEditAvatarClick}></div>
        <div className="profile__info">
          <div className="profile__info-text">
            <h1 className="profile__name"></h1>
            <p className="profile__workplace"></p>
          </div>
          <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
        </div>
        <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="elements">
      </section>

    </main>
    )
}
export default Main;