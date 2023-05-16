import { React, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {settings_home, slides_home} from '../../../config/slider';

const SliderHome = () => {
    return (
        <div className="slider-area">
            <OwlCarousel
                items={settings_home.slides}
                className={settings_home.theme}
                nav={settings_home.nav}
                dots={settings_home.dots}
                margin={settings_home.margin}
                autoplay={settings_home.autoplay}
                loop={settings_home.loop}
            >
                {slides_home.map((slide) => (
                    <div className="single-slider slider-height-1 bg-img">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 col-md-7 col-12 col-sm-12">
                                    <div className="slider-content slider-animated-1 pt-230">
                                        <h1 className="animated">{slide.heading}</h1>
                                        {slide.paragraphs.map((p) => (
                                            <p className="animated">{p}</p>
                                        ))}
            
                                        <div className="slider-btn">
                                            {slide.buttons.map((btn) => (
                                                <Link 
                                                    to={btn.href}
                                                    className={btn.className}
                                                >
                                                    {btn.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-single-img slider-animated-1">
                                <img className="animated" src={slide.bg.src} alt={slide.bg.alt} />
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
}
 
export default SliderHome;