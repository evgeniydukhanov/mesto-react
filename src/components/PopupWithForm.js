import React from 'react'


function PopupWithForm(props) {

    return (
        <div className={props.isOpen
            ? `popup popup_type_${props.name} popup_opened`
            : `popup popup_type_${props.name}`} >
            <div className="popup__overlay"></div>
            <div className="popup__container">
                <button className="popup__close-button" onClick={props.onClose} type="button" ></button>
                <p className="popup__heading">{props.title}</p>
                <form className="popup__input popup__input_info" name={`${props.name}`}>
                    {props.children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;