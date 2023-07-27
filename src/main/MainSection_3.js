import React from 'react';
import card_1 from '../image/unsplash_IF9TK5Uy-KI.png'
import card_2 from '../image/unsplash_RBerxXPnZPE.png'
import card_3 from '../image/unsplash_sLGYaQ_stMM.png'
import card_4 from '../image/unsplash_52fj00DaOPA.png'
import card_5 from '../image/unsplash_TSZo17r3m0s.png'
const MasterSection = () => {
    return (
        <main>
            <section className="section-intro">
                <div className="wrapper">
                    <h1 className="section1-text">Наши мастера</h1>
                    <div className="section1-left-mid-right">
                        <div className="section1-left">
                            <img className="img-left" src={card_1} alt="" />
                            <p className="text-left">Елена Васильевна</p>
                            <p className="text-left1">Визажист</p>
                            <img className="img-left" src={card_2} alt="" />
                            <p className="text-left">Елена Васильевна</p>
                            <p className="text-left1">Визажист</p>
                        </div>
                        <div className="section1-mid">
                            <img className="img-left" src={card_3} alt="" />
                            <p className="text-left">Елена Васильевна</p>
                            <p className="text-left1">Визажист</p>
                            <img className="img-left" src={card_1} alt="" />
                            <p className="text-left">Елена Васильевна</p>
                            <p className="text-left1">Визажист</p>
                        </div>
                        <div className="section1-left">
                            <img className="img-left" src={card_4} alt="" />
                            <p className="text-left">Елена Васильевна</p>
                            <p className="text-left1">Визажист</p>
                            <img className="img-left" src={card_5} alt="" />
                            <p className="text-left">Елена Васильевна</p>
                            <p className="text-left1">Визажист</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MasterSection;
