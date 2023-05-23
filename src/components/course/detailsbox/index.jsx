import {React, Fragment} from 'react';

const DetailsBox = ({paragraphs, course_list_content, img_banner, total_students, course_duration, course_credits, total_semester}) => {
    const image = require('../../../assets/img/banner/'+img_banner.src);
    return (
        <Fragment>
            {paragraphs.map((p) => (
                <p key={Math.random()}>{p}</p>
            ))}
            <div className="over-view-list">
                {course_list_content.map((course) => (
                    <div 
                        key={Math.random()}
                        className="sin-over-view-list"
                    >
                        <div className="course-list-icon">
                            <i className="fa fa-check"></i> .
                        </div>
                        <div className="course-list-content">
                            <p>{course}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="course-details-img">
                <img src={image} alt={img_banner.alt} />
            </div>
            <div className="course-summary-wrap">
                <div className="single-course-summary">
                    <h4>Total Students</h4>
                    <span><i className="fa fa-user"></i> {total_students}</span>
                </div>
                <div className="single-course-summary">
                    <h4>Course Duration</h4>
                    <span><i className="fa fa-clock-o"></i> {course_duration}</span>
                </div>
                <div className="single-course-summary">
                    <h4>Course Credits</h4>
                    <span><i className="fa fa-diamond"></i> {course_credits}</span>
                </div>
                <div className="single-course-summary">
                    <h4>Total Semester</h4>
                    <span><i className="fa fa-book"></i> {total_semester}</span>
                </div>
            </div>
        </Fragment>
    );
}
 
export default DetailsBox;