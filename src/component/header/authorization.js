import React,{useState} from 'react';
import "./authorization.scss";
import Modalwindow from "./modalwindow";
import RegistrationNewAccount from "./registrationNewAccount";
import InAccount from "./inAccount";


export const Authorization = () => {
    const [modalActive, setModalActive] = useState(false)
    const [checkButton, setCheckButton] = useState(false)
    return (
        <div className="Authorization-conteiner">
            <button className="inAccount" onClick={() => setModalActive(true) || setCheckButton(true)}>ВОЙТИ</button>
            <button className="registrate" onClick={() => setModalActive(true) || setCheckButton(false)}>ЗАРЕГЕСТИРОВАТЬСЯ</button>

            {modalActive ?
                <Modalwindow
                    active={modalActive}
                    setActive={setModalActive}
                    children={checkButton ? <InAccount /> : <RegistrationNewAccount />}
            /> : null}



        </div>
    );
};