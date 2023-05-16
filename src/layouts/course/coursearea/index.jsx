import React from 'react';
import {caption, slides} from '../../../config/courses';

// components
import SliderCourses from '../../slider/slidercourses';

const CourseArea = () => {
    return (
        <div className="course-area bg-img pt-130 pb-10" style={{backgroundImage: "../../../assets/img/bg/bg-1.jpg"}}>
            <div className="container">
                <div className="section-title mb-75">
                    <h2> <span>Our</span> Courses</h2>
                    <p>{caption}</p>
                </div>

                <SliderCourses 
                    slides={slides}
                />
            </div>
        </div>
    );
}
 
export default CourseArea;