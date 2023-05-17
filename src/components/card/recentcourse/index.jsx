import React from 'react';
import { Link } from 'react-router-dom';

const RecentCourse = ({course}) => {
    const img = require("../../../assets/img/course/"+course.img.src);
    return (
        <div class="sin-sidebar-recent-course">
            <div class="sidebar-recent-course-img">
                <Link to="#"><img src={img} alt={course.img.alt} /></Link>
            </div>
            <div class="sidebar-recent-course-content">
                <h4><Link to="#">{course.heading}</Link></h4>
                <ul>
                    <li>Credits : {course.credits}</li>
                    <li class="duration-color">Duration : {course.duration}</li>
                </ul>
                {course.paragraphs.map((p) => (
                    <p key={Math.random()}>{p}</p>
                ))}
            </div>
        </div>
    );
}
 
export default RecentCourse;