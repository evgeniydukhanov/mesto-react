import React from "react";

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }
    return (
        <div className="element">
            <img className="element__pic" onClick={handleClick} src={props.card.link} alt={props.card.name} />
            <button className="element__delete"></button>
            <div className="element__caption">
                <p className="element__title">{props.card.name}</p>
                <div className="element__like_area">
                    <button className="element__button" type="button"></button>
                    <p className="element__like_counter">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;