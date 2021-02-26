import * as React from 'react';
import "./logo.scss";
import logo from "../../img/logo.svg";

export const Logo = () => {
    return (
        <div className="logo-conteiner">
            <img src={logo} alt={logo}/>
        </div>
    );
};