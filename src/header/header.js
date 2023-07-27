import React from 'react';
import group_2 from '../image/Group 2.png'
import logo from '../image/omega-sign-svgrepo-com 1.png'
import close_icone from '../image/close-icon.png'
const Header = () => {
    return (
        <header>
            <div>
                <div className="wrapper">
                    <div className="header_wrapper">
                        <div className="header-inst-link">
                            <a href=""><img className="img_inst-header" src={group_2} alt="" /></a>
                        </div>
                        <div className="header-nav">
                            <a className="header-nav-link" href="#">Главная</a>
                            <a className="header-nav-link" href="./header_3">Мастера</a>
                            <a className="header-nav-link" href="./header_2">Косметика</a>
                        </div>
                        <div className="header-logo">
                            <a href="./header_2"><img src={logo} alt="" /></a>
                        </div>
                        <div className="header-nav">
                            <a className="header-nav-link" href="./header_2">Акции</a>
                            <a className="header-nav-link" href="./header_5">Отзывы</a>
                            <a className="header-nav-link" href="./header_5">Контакты</a>
                            <a href="#"><img src={close_icone} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
