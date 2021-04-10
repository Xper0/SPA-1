
import * as React from 'react';
import {Link} from "react-router-dom";
import "./Home.scss";
import {useState} from "react";

const Home = () => {
    const data = {
        guests : [
            {
                id: 0,
                people: "Взрослые",
                qut : 1
            },
            {
                id: 1,
                people: "Дети",
                qut : 1
            },
            {
                id: 2,
                people: "Малыши",
                qut : 1
            }
        ]


    }
    const [openList, setOpenList] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [activeDis, setActiveDis] = useState(false)

    const OpenList = (open) => {
        if (open === ""){
            return setOpenList("Home__menu_active")
        }
        setOpenList("")

    }
    const quantityPlus = (e, qut,id) => {
        e.preventDefault()

        setQuantity(qut + 1)
        console.log(qut,id)


    }
    const quantityMinus = (e, qut, id ) => {
        e.preventDefault()
        if(qut === 0 ){
            return setActiveDis(true)
        }
        setQuantity(qut - 1)
        console.log(qut,id)
    }

    return (
        <div className="Home-conteiner">
            <div className="Home__conteiner-find">
                <h1 className="">Найдём номера под ваши пожелания</h1>
                <form>
                    <h2>Прибытие</h2>
                    <input type="date"/>
                    <h2>Выезд</h2>
                    <input type="date"/>
                    <h2>Гости</h2>
                    <div className="Home__form">
                        <form className="Search-form">
                            <div className="Home__select ">
                                <label className="Home__title" onClick={() => OpenList(openList)}>Гости</label>
                                <div className={`Home__menu  Home__menu_active ${openList}`}>

                                    {data.guests.map(item => <div key={item.id}>
                                        <div>{item.people}</div>
                                        <div>
                                            <button
                                                disabled={activeDis ? quantity === 0 : null}
                                                onClick={(e) => quantityMinus(e, quantity, item.id)}>-
                                            </button>
                                            <span>{item.qut}</span>
                                            <button onClick={(e) => quantityPlus(e, quantity)}>+</button>
                                        </div>
                                    </div>)}

                                    <button>Очистить</button>  <button>Применить</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Link to="/room"> <button >Подобрать номер</button></Link>

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