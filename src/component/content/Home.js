
import * as React from 'react';
import {Link} from "react-router-dom";
import "./Home.scss";

const Home = () => {
    const handleclick = (e) =>{
        e.preventDefault();
        return <Link to="/room"></Link>
        // console.log("тык")
    }
    return (
        <div className="Home-conteiner">
            <div className="Home-conteiner-find">
                <h1>Найдём номера под ваши пожелания</h1>
                <form>
                    <h2>Прибытие</h2>
                    <input type="date"/>
                    <h2>Выезд</h2>
                    <input type="date"/>
                    <h2>Гости</h2>
                    <select>
                        <option>Сколько гостей</option>
                    </select>
                    <button onClick={(e) => handleclick(e)}>Подобрать номер</button>
                </form>
            </div>
            <div>
                <p>
                    Лучшие номера для вашей работы, отдыха и просто вдохновения
                </p>
            </div>

        </div>
    );
};

export default Home;