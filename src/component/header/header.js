import * as React from 'react';
import {Link} from "react-router-dom";
import "./header.scss";
import SideBar from "./SideBar";
import {Logo} from "./logo";
import {Authorization} from "./authorization";


const Header = () => {
    return (
        <div className="header-conteiner">
            <Link to="/"><Logo/></Link>
            <SideBar/>
            <Authorization />
        </div>
    );
};

export default Header;