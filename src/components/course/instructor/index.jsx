import React from 'react';

// components
import DetailsBox from '../detailsbox';

const Instructor = ({details}) => {
    const {paragraphs, course_list_content, total_students, course_duration, course_credits, total_semester, img_banner, instructor} = details;

    return (
        <div className="over-view-content">
            <h4>INSTRUCTOR</h4>
            <h5>Head Of The Department  : {instructor}</h5>
            
            <DetailsBox 
                paragraphs={paragraphs}
                course_list_content={course_list_content}
                img_banner={img_banner}
                total_students={total_students}
                course_duration={course_duration}
                course_credits={course_credits}
                total_semester={total_semester}
            />
        </div>
    );
}
 
export default Instructor;