import React from 'react';

// components
import DetailsBox from '../detailsbox';

const Details = ({details}) => {
    const {heading, paragraphs, course_list_content, total_students, course_duration, course_credits, total_semester, img_banner} = details;

    
    return (
        <div className="over-view-content">
            <h4>COURSE  DETAILS</h4>
            <h5>Course Name : {heading}</h5>
            
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
 
export default Details;