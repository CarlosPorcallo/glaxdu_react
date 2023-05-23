import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {settings_gallery} from '../../../config/slider';

// components
import SlideGallery from '../../slides/gallery';

const SliderGallery = ({slides}) => {
    return (
        <div className="slider-area">
            <OwlCarousel
                items={settings_gallery.slides}
                className={settings_gallery.theme}
                nav={settings_gallery.nav}
                dots={settings_gallery.dots}
                margin={settings_gallery.margin}
                autoplay={settings_gallery.autoplay}
                loop={settings_gallery.loop}
            >
                {slides.map((slide) => (
                    <SlideGallery
                        key={Math.random()} 
                        slide={slide}
                    />
                ))}
            </OwlCarousel>
        </div>
    );
}
 
export default SliderGallery;