import * as React from 'react';
import Navfilter from "./Navfilter";
import "./SearcRoom.scss";
import Cards from "./Cadrs";


const SearchRoom = ({ cards }) => {
    console.log(cards)
    return (
        <section className="Search">
            <h1 className="Search__title">Номера, которые мы для вас подобрали</h1>
            <div className="Search__content">
                <div className="Search__nav">
                    <Navfilter />
                </div>
                <div className="Search__cards">
                    {cards.map( item => <Cards cards={item}/>)}
                </div>
            </div>
        </section>
    );
};
export default SearchRoom;