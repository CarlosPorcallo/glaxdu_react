import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({slide}) => {
    const img = require("../../../assets/img/course/"+slide.img.src);
    return (
        <div className="single-course">
            <div className="course-img">
                <Link to={slide.href}><img className="animated" src={img} alt={slide.img.alt} /></Link>
                {slide.tag !== undefined ? <span>{slide.tag}</span>: null}
            </div>
            <div className="course-content">
                <h4><Link to={slide.href}>{slide.heading}</Link></h4>
                {slide.paragraphs.map((p) => (
                    <p key={Math.random()}>{p}</p>
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