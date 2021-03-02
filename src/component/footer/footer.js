
import * as React from 'react';
import "./footer.scss";
import navFooterData from "./navFooterData";
import {Link} from "react-router-dom";
import {Logo} from "../header/logo";
import { IconContext } from "react-icons";
import {AiFillFacebook, AiOutlineTwitter,AiOutlineInstagram} from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer-conteiner">
            <div className="footer-conteiner-content">
                <div>
                    <Logo />
                    <p>Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»</p>
                </div>
                {navFooterData.map((item, index )=> <nav className="footer-nav" key={index}>
                    <div>
                        <h1>{item.nav}</h1>
                        <ul>
                            {item.list.map( (liste, index) => <li key={index}><Link to="/">{liste}</Link></li>
                            )}
                        </ul>
                        <div>
                            {item.info}
                            {item.input}
                        </div>
                    </div>
                </nav>)}
            </div>
            <hr />
            <div className="footer-conteiner-footer">
                <div><p>Copyright © 2018 Toxin отель. Все права зачищены.</p></div>
                <IconContext.Provider value={{ className: 'react-icons' }}>
                    <div><AiOutlineTwitter to="twitter.com"/><AiFillFacebook /> <AiOutlineInstagram /> </div>
                </IconContext.Provider>

            </div>

        </div>
    );
};

export default Footer;