import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {settings_courses} from '../../../config/slider';

// components
import SlideCourses from '../../../components/slides/courses';

const SliderCourses = ({slides}) => {
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