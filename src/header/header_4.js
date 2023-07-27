import React from 'react';
import group_1 from '../image/Group 1 (1).png'
import logo from '../image/omega-sign-svgrepo-com 1.png'
import group_2 from '../image/Group 2.png'
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header_wraper">
                    <div className="header_link">
                        <a href=""><img src={group_1} alt="" className="header_link-img1" /></a>
                    </div>
                    <div className="header_nav">
                        <ul className="header_list">
                            <li className="header_item"><a href="./header.js" className="header-nav"><span className="jj">Главная</span></a></li>
                            <li className="header_item"><a href="./header_3" className="header-nav">Мастера</a></li>
                            <li className="header_item"><a href="./header_2" className="header-nav">Косметика</a></li>
                        </ul>
                    </div>
                    <div className="header_logo">
                        <img src={logo} alt="" className="header-logo" />
                    </div>
                    <div className="header_nav">
                        <ul className="header_list">
                            <li className="header_item"><a href="#" className="header-nav">Акции</a></li>
                            <li className="header_item"><a href="./header_5" className="header-nav">Отзывы</a></li>
                            <li className="header_item"><a href="./header_5" className="header-nav">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="header_link">
                        <a href=""><img src={group_2} alt="" className="header_link-img2" /></a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
