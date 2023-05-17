import React from 'react';
import {caption, courses, img_background} from '../../../config/courses';

// components
import SliderCourses from '../../../components/slider/courses';

const CourseArea = () => {
    return (
        <div className="course-area bg-img pt-130 pb-10" style={{backgroundImage: img_background}}>
            <div className="container">
                <div className="section-title mb-75">
                    <h2> <span>Our</span> Courses</h2>
                    <p>{caption}</p>
                </div>

                <SliderCourses 
                    slides={courses}
                />
            </div>
        </div>
    );
}
 
export default CourseArea;