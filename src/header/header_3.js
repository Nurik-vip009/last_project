import React from 'react';
import group_2 from '../image/Group 2.png'
import logo from '../image/omega-sign-svgrepo-com 1.png'
import group_1 from '../image/Group 1 (1).png'
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
                            <a className="header-nav-link" href="header_2">Главная</a>
                            <a className="header-nav-link" href="#">Мастера</a>
                            <a className="header-nav-link" href="./header_2">Косметика</a>
                        </div>
                        <div className="header-logo">
                            <a href="./header_2"><img src={logo} alt="" /></a>
                        </div>
                        <div className="header-nav">
                            <a className="header-nav-link" href="./header_4">Акции</a>
                            <a className="header-nav-link" href="./header_5">Отзывы</a>
                            <a className="header-nav-link" href="./header_5">Контакты</a>
                            <a href="./header"><img src={group_1} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
