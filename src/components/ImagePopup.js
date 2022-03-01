import React from 'react'


function ImagePopup() {
    return (
        <div className="popup popup_type_pic">
            <div className="popup__overlay"></div>
            <div className="popup__pic-container">
                <button className="popup__close-button" type="button"></button>
                <img className="popup__big-picture" src="#" alt="#" />
                <p className="popup__pic-caption"></p>
            </div>
        </div>
    )
}

export default ImagePopup;