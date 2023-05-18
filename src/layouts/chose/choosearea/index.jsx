import React from 'react';
import {about_cards, about_banner2, about_banner3} from '../../../config/about';

// components
import About from '../../../components/card/about';

const ChooseArea = () => {
    const img_banner = require('../../../assets/img/banner/'+about_banner2);
    const background_image = require('../../../assets/img/bg/'+about_banner3);
    return (
        <div className="choose-area bg-img pt-90" style={{backgroundImage: background_image}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="about-chose-us pt-120">
                            <div className="row">
                                {about_cards.map((card) => (
                                    <About 
                                        key={Math.random()}
                                        about={card}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="about-img">
                            <img src={img_banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ChooseArea;