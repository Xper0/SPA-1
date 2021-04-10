import React from 'react';
import "./Navfilter.scss";

const Navfilter = () => {
    return (
        <div className="Nav-filter">
            <label className="Nav-filter__title">Дата пребывания</label>
            <input className="Nav-filter__input-data" type="data" />
            <label className="Nav-filter__guest">Гости</label>
            <input className="Nav-filter__input-guest" />
            <label className="Nav-filter__range">Диапозон цены</label>
            <input className="Nav-filter__input-range" type="range" min="0" max="100000"/>
            <span className="Nav-filter__description-range">Стоимость за сутки пребывания в номере</span>
            <label className="Nav-filter__rule-house">Правила дома</label>
            <input type="checkbox" value="Можно курить"/>
            <input type="checkbox" value="Можно с питомцами"/>
            <input type="checkbox" value="Можно пригласить гостей (до 10 человек)"/>
            <label className="Nav-filter__accessibility">Доступность</label>
            <input type="checkbox" value="Широкий коридор"/>
            <span className="Nav-filter__description-checkbox">Ширина коридоров в номере не менее 91 см.</span>
            <input type="checkbox" value="Помощник для инвалидов"/>
            <span className="Nav-filter__description-checkbox">На 1 этаже вас встретит специалист  и проводит до номера.</span>
            <label className="Nav-filter__comfort">удобства номера</label>
            <input className="Nav-filter__input-comfort Nav-filter__input-drop-down" type="data" />
            <label className="Nav-filter__additional-amenities Nav-filter__additional-amenities-drop-down">Дополнительные удобства</label>
        </div>
    );
};

export default Navfilter;