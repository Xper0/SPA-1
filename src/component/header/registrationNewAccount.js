import * as React from 'react';
import {Link} from "react-router-dom";
import Modalwindow from "./modalwindow";
import InAccount from "./inAccount";

function RegistrationNewAccount() {
    const [modalActive, setModalActive] = React.useState(false)
    return (
        <div>
            <div>
                <h1>Регистрация аккаунта</h1>
            </div>
            <form>
                <input placeholder="Имя"/>
                <input placeholder="Фамилия"/>
                <label><input type="radio" name="male" />Мужской</label>
                <label><input type="radio" name="male" />Женский</label>
                <h3>Дата рождения</h3>
                <input type="date"/>
                <h3>Даныне для входа в сервис</h3>
                <input placeholder="Email"/>
                <input placeholder="Пароль"/>
                <button>Зарегестрироваться</button>
            </form>
            <div>
                <h3>Уже есть на Toxin</h3>
                <button className="inAccount" onClick={() => setModalActive(true)}>ВОЙТИ</button>
            </div>

            {modalActive ?
                <Modalwindow
                    active={modalActive}
                    setActive={setModalActive}
                    children={<InAccount />}
                /> : null}
        </div>
    );
};


export default RegistrationNewAccount;