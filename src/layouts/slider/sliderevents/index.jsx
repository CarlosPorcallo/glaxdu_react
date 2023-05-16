import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {settings_events, slides} from '../../../config/slider';

// components
import SlideEvent from '../../../components/slider/events';

const SliderEvents = ({slides}) => {
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
                        slide={slide}
                    />
                ))}
            </OwlCarousel>
        </div>
    );
}
 
export default SliderEvents;