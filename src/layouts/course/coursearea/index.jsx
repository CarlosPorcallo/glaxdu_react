import React from 'react';
import {heading_courses_home} from '../../../config/courses';

// components
import SliderCourses from '../../../components/slider/courses';
import Heading from '../../../components/heading';

const CourseArea = ({caption, courses, img_background}) => {
    return (
        <div className="course-area bg-img pt-130 pb-10" style={{backgroundImage: img_background}}>
            <div className="container">
                <div className="section-title mb-75">
                    <h2>Our <span>Courses </span></h2>
                    <p>{caption}</p>
                </div>

                <SliderCourses slides={courses} />
            </div>
        </div>
    );
}
 
export default CourseArea;