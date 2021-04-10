import React from 'react';
import "./Cards.scss";
function Cards({ cards }) {
    return (
        <div className="Search__items-list" key={cards.id}>
            <img src={cards.img} alt={cards.imgDesc}/>
            <div>
                <span className="Search__number">{cards.number}</span>
                <span className="Search__price Search__text">{cards.price}<span className="Search__text">в сутки</span></span>
            </div>
            <hr />
            <div className="Search__rating">
                {cards.stars}
                <p>{cards.review}</p>
            </div>
        </div>
    );
}

export default Cards;