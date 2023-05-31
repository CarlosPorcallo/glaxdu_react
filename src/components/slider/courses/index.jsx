import React, {useState, useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {settings_courses} from '../../../config/slider';

// components
import SlideCourses from '../../../components/slides/courses';

// middleware
import {getWindowSize} from '../../../middleware/utils/window';
 
const SliderCourses = ({slides}) => {
    const [window_size, setWindowSize] = useState(getWindowSize());
    const handleWindowResize = () => { 
        if (window.innerWidth < settings_courses.minWidth) {
            settings_courses.slides = 1;
        } else if (window.innerWidth >= settings_courses.minWidth && window.innerWidth <= settings_courses.maxWidth) {
            settings_courses.slides = 2;
        } else {
            settings_courses.slides = 3;
        }
        setWindowSize(getWindowSize()); 
    };    
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }; 
    }, []);
    //handleWindowResize()

    return (
        <div className="slider-area">
            <OwlCarousel
                items={settings_courses.slides}
                className={settings_courses.theme}
                nav={settings_courses.nav}
                dots={settings_courses.dots}
                margin={settings_courses.margin}
                autoplay={settings_courses.autoplay}
                loop={settings_courses.loop}
            >
                {slides.map((slide) => (
                    <SlideCourses
                        key={Math.random()} 
                        slide={slide}
                    />
                ))}
            </OwlCarousel>
        </div>
    );
}

export default SliderCourses;