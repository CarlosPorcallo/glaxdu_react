import React, {useState, useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {settings_events} from '../../../config/slider';

// components
import SlideEvent from '../../../components/slides/events';

// middleware
import {getWindowSize} from '../../../middleware/utils/window';

const SliderEvents = ({slides}) => {
    const [window_size, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        const handleWindowResize = () => { 
            if (window.innerWidth < settings_events.minWidth) {
                settings_events.slides = 1;
            } else if (window.innerWidth >= settings_events.minWidth && window.innerWidth <= settings_events.maxWidth) {
                settings_events.slides = 2;
            } else {
                settings_events.slides = 3;
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
                items={settings_events.slides}
                className={settings_events.theme}
                nav={settings_events.nav}
                dots={settings_events.dots}
                margin={settings_events.margin}
                autoplay={settings_events.autoplay}
                loop={settings_events.loop}
            >
                {slides.map((slide) => (
                    <SlideEvent
                        key={Math.random()}
                        slide={slide}
                    />
                ))}
            </OwlCarousel>
        </div>
    );
}
 
export default SliderEvents;