import React, {useState, useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {settings_gallery} from '../../../config/slider';

// components
import SlideGallery from '../../slides/gallery';

// middleware
import {getWindowSize} from '../../../middleware/utils/window';

const SliderGallery = ({slides}) => {
    const [window_size, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        const handleWindowResize = () => { 
            if (window.innerWidth < 700) {
                settings_gallery.slides = 1;
            } else if (window.innerWidth >= 700 && window.innerWidth <= 1000) {
                settings_gallery.slides = 2;
            } else {
                settings_gallery.slides = 3;
            }
            setWindowSize(getWindowSize()); 
        };    
        window.addEventListener('resize', handleWindowResize);
        
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }; 
    }, []);

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