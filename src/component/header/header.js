import * as React from 'react';
import "./header.scss";
import SideBar from "./SideBar";
import {Logo} from "./logo";
import {Authorization} from "./authorization";


const Header = () => {
    return (
        <div className="header-conteiner">
            <Logo/>
            <SideBar/>
            <Authorization />
        </div>
    );
};

export default Header;