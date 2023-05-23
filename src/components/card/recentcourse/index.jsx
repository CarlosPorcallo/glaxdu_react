import React from 'react';
import { Link } from 'react-router-dom';

const RecentCourse = ({course}) => {
    const img = require("../../../assets/img/course/"+course.img.src);
    return (
        <div className="sin-sidebar-recent-course">
            <div className="sidebar-recent-course-img">
                <Link to={course.href}><img src={img} alt={course.img.alt} /></Link>
            </div>
            <div className="sidebar-recent-course-content">
                <h4><Link to={course.href}>{course.heading}</Link></h4>
                <ul>
                    <li>Credits : {course.credits}</li>
                    <li className="duration-color">Duration : {course.duration}</li>
                </ul>
                {course.summary.map((p) => (
                    <p key={Math.random()}>{p}</p>
                ))}
            </div>
        </div>
    );
}
 
export default RecentCourse;