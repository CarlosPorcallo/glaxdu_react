import React, {useRef} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {settings_brands} from '../../../config/slider';

// components
import SlideBrand from '../../slides/brand';

const SliderBranding = ({slides}) => {
    const window_size = useRef({
        "width": window.innerWidth,
        "height": window.innerHeight
    });

    if (window_size.current.width < 700) {
        settings_brands.slides = 1;
    } else if (window_size.current.width >= 700 && window_size.current.width <= 1000) {
        settings_brands.slides = 2;
    }

    return (
        <div className="slider-area">
            <OwlCarousel
                items={settings_brands.slides}
                className={settings_brands.theme}
                nav={settings_brands.nav}
                dots={settings_brands.dots}
                margin={settings_brands.margin}
                autoplay={settings_brands.autoplay}
                loop={settings_brands.loop}
            >
                {slides.map((slide) => (
                    <SlideBrand
                        key={Math.random()} 
                        slide={slide}
                    />
                ))}
            </OwlCarousel>
        </div>
    );
}
 
export default SliderBranding;