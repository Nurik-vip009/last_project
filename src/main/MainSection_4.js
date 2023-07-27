import React from 'react';
import image_card from '../image/image (32).png'
const MainSection = () => {
    return (
        <main>
            <div className="intro">
                <section className="sec1">
                    <div className="container">
                        <div className="dd">

                        </div>
                        <p className="sec1_text1">
                            Цены на услуги
                        </p>
                        <div className="sec1_wraper">
                            <div className="sec1_card">
                                <img src={image_card} alt="" className="sec1-card" />
                            </div>
                        </div>
                        <div className="ds">

                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default MainSection;
