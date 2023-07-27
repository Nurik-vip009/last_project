import React from 'react';
import logo from '../image/omega-sign-svgrepo-com 1.png'
import group_2 from '../image/Group 2.png'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer-wrapper">
                    <div className="footer-img">
                        <img src={logo} alt="" className="ft-ig" />
                    </div>
                    <div className="contact">
                        <h1 className="ft-text">Контакты</h1>
                        <div className="footer-nav">
                            <ul className="ft-li">
                                <li className="ft-list"><a href="" className="ft-link">+7 (812) 123-45-67</a></li>
                                <li className="ft-list"><a href="" className="ft-link">+7 (911) 123-45-67</a></li>
                                <li className="ft-list"><a href="" className="ft-link">Новоостровский проспект, дом 36 лит. С</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="work">
                        <h1 className="ft-text">Режим работы</h1>
                        <div className="footer-nav">
                            <ul className="ft-li">
                                <li className="ft-list"><a href="" className="ft-link">C 10:00 до 21:00 (Пн-Пт)</a></li>
                                <li className="ft-list"><a href="" className="ft-link">С 11:00 до 20:00 (Сб-Вс)</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="instagram">
                        <h1 className="ft-text">Мы в Instagram</h1>
                        <div className="inst-img">
                            <img src={group_2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="line-block"></div>
                <p className="last--text">Copyright © 2017 - 2022</p>
            </div>
        </footer>
    );
};

export default Footer;
