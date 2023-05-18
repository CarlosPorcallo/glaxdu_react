import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {settings_brands} from '../../../config/slider';

// components
import SlideBrand from '../../slides/brand';

const SliderBranding = ({slides}) => {
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