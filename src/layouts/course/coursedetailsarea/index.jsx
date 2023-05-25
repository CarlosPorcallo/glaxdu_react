import {React, useState, useContext} from 'react';

// components
import SliderCourses from '../../../components/slider/courses';
import Details from '../../../components/course/details';
import Instructor from '../../../components/course/instructor';
import ReviewWrapper from '../../../components/course/reviewwrapper';
import RattingFormWrapper from '../../../components/forms/rattingformwrapper';

// layouts
import Sidebar from '../../sidebar';

// context
import {CourseContext} from '../../../middleware/context/course';

const CourseDetailsArea = () => {
    const {course, relatedCourses} = useContext(CourseContext);
    const img_banner = require('../../../assets/img/banner/'+course.current.img_background.src);
    const [tab, setTab] = useState(1);
    return (
        <div className="course-details-area pt-130">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <div className="course-left-wrap mr-40">
                            <div className="apply-area">
                                <img src={img_banner} alt={course.current.img_background.alt} />
                                <div className="course-apply-btn">
                                    <a href="#" className="default-btn">APPLY NOW</a>
                                </div>
                            </div>
                            <div className="course-tab-list nav pt-40 pb-25 mb-35">
                                <a 
                                    className={tab === 1 ? "active" : null} 
                                    onClick={() => {setTab(1)}}
                                >
                                    <h4>Over View  </h4>
                                </a>
                                <a 
                                    className={tab === 2 ? "active" : null} 
                                    onClick={() => {setTab(2)}}
                                >
                                    <h4>Instructor </h4>
                                </a>
                                <a
                                    className={tab === 3 ? "active" : null} 
                                    onClick={() => {setTab(3)}}
                                >
                                    <h4> Reviews </h4>
                                </a>
                            </div>
                            <div className="tab-content jump">
                                <div className={tab === 1 ? "tab-pane active" : "tab-pane"}>
                                    <Details details={course.current} />
                                </div>
                                <div className={tab === 2 ? "tab-pane active" : "tab-pane"}>
                                    <Instructor
                                        details={course.current}
                                    />
                                </div>
                                <div className={tab === 3 ? "tab-pane active" : "tab-pane"}>
                                    <ReviewWrapper reviews={course.current.reviews} />
                                    <RattingFormWrapper />
                                </div>
                            </div>
                            <div className="related-course pt-70">
                                <div className="related-title mb-45 mrg-bottom-small">
                                    <h3>Related Course</h3>
                                    {course.current.course_list_content.map((p) => ( <p key={Math.random()}>{p}</p> ))}
                                </div>

                                <SliderCourses slides={relatedCourses.current} />
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CourseDetailsArea;