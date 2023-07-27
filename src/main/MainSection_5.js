import React from 'react';

const MainSection = () => {
    return (
        <main>
            <div className="sec1">
                <div className="container">
                    <p className="sec1_text">
                        Контакты
                    </p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11697.351938516846!2d74.3000763!3d42.8657099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1686908857592!5m2!1sru!2skg" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="sec1_wraper">
                        <div className="sec1_column1">
                            <p className="sec1_text1">
                                Контакты
                            </p>
                            <ul className="sec1_list">
                                <li className="sec1_item"><a href="" className="sec1_link">+7 (812) 123-45-67</a></li>
                                <li className="sec1_item"><a href="" className="sec1_link">+7 (911) 123-45-67</a></li>
                                <li className="sec1_item"><a href="" className="sec1_link">Новоостровский проспект, дом 36 лит. С</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="kj">

                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainSection;
