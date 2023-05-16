import { React, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {settings, slides} from '../../../config/slider';

const SliderArea = () => {
    return (
        <div className="slider-area">
            <OwlCarousel
                items={settings.slides}
                className={settings.theme}
                nav={settings.nav}
                dots={settings.dots}
                margin={settings.margin}
                autoplay={settings.autoplay}
                loop={settings.loop}
            >
                {slides.map((slide) => (
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
 
export default SliderArea;