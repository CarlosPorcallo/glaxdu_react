import React, {useState, useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {settings_home} from '../../../config/slider';

// components
import SlideHome from '../../../components/slides/home';

// middleware
import {getWindowSize} from '../../../middleware/utils/window';

const SliderHome = ({slides}) => {
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
                {slides.map((slide) => (
                    <SlideHome
                        key={Math.random()}
                        slide={slide}
                    />
                ))}
            </OwlCarousel>
        </div>
    );
}
 
export default SliderHome;