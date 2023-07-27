import React from 'react';
import logo from '../image/omega-sign-svgrepo-com 1.png'
import group_2 from '../image/Group 2.png'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_wraper">
                    <div className="footer_column1">
                        <img src={logo} alt="" className="footer_logo" />
                    </div>
                    <div className="footer_column1">
                        <p className="footer_text">
                            Контакты
                        </p>
                        <ul className="footer_list">
                            <li className="footer_item"><a href="" className="footer_link">+7 (812) 123-45-67</a></li>
                            <li className="footer_item"><a href="" className="footer_link">+7 (911) 123-45-67</a></li>
                            <li className="footer_item"><a href="" className="footer_link">Новоостровский проспект, дом 36 лит. С</a></li>
                        </ul>
                    </div>
                    <div className="footer_column2">
                        <p className="footer_text">
                            Режим работы
                        </p>
                        <ul className="footer_list">
                            <li className="footer_item"><a href="" className="footer_link">C 10:00 до 21:00 (Пн-Пт)</a></li>
                            <li className="footer_item"><a href="" className="footer_link">С 11:00 до 20:00 (Сб-Вс)</a></li>
                        </ul>
                    </div>
                    <div className="footer_column1">
                        <p className="footer_text">
                            Мы в Instagram
                        </p>
                        <a href="" className="footer_link"><img src={group_2} alt="" /></a>
                    </div>
                </div>
                <div className="kk">

                </div>
                <p className="footer_end">
                    Copyright © 2017 - 2022
                </p>
            </div>
        </footer>
    );
};

export default Footer;
