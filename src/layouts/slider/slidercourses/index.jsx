import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {settings_courses} from '../../../config/slider';

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
                    <div className="single-course">
                        <div className="course-img">
                            <Link to={slide.href}><img className="animated" src={slide.img.src} alt={slide.img.alt} /></Link>
                            <span>{slide.tag}</span>
                        </div>
                        <div className="course-content">
                            <h4><Link to={slide.href}>{slide.heading}</Link></h4>
                            {slide.paragraphs.map((p) => (
                                <p>{p}</p>
                            ))}
                        </div>
                        <div className="course-position-content">
                            <div className="credit-duration-wrap">
                                <div className="sin-credit-duration">
                                    <i className="fa fa-diamond"></i>
                                    <span>Credits : {slide.credits}</span>
                                </div>
                                <div className="sin-credit-duration">
                                    <i className="fa fa-clock-o"></i>
                                    <span>Duration : {slide.duration}</span>
                                </div>
                            </div>
                            <div className="course-btn">
                                <Link
                                    className={slide.button.className}
                                    to={slide.button.href}
                                >{slide.button.name}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
}
 
export default SliderCourses;