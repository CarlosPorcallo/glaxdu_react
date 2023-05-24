import React from 'react';
import {courses, recents_limit} from '../../../config/courses';

// components
import RecentCourse from '../../../components/card/recentcourse';

const RecentCoursesSidebar = () => {
    return (
        <div className="sidebar-recent-course-wrap mb-40">
            <div className="sidebar-title mb-40">
                <h4>Recent Courses</h4>
            </div>
            <div className="sidebar-recent-course">
                {courses.slice(0, recents_limit).map((course) => (
                    <RecentCourse 
                        key={Math.random()}
                        course={course} 
                    />
                ))}
            </div>
        </div>
    );
}
 
export default RecentCoursesSidebar;