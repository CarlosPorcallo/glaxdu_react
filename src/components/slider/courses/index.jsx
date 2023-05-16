import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Courses = ({slide}) => {
    return (
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
    );
}
 
export default Courses;