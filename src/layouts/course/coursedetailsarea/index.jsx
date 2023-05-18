import React from 'react';

// components
import SliderCourses from '../../../components/slider/courses';

// layouts
import Sidebar from '../../sidebar';

const CourseDetailsArea = ({course, courses}) => {
    const img_banner = require('../../../assets/img/banner/'+course.img_background.src);
    return (
        <div className="course-details-area pt-130">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <div className="course-left-wrap mr-40">
                            <div className="apply-area">
                                <img src={img_banner} alt={course.img_background.alt} />
                                <div className="course-apply-btn">
                                    <a href="#" className="default-btn">APPLY NOW</a>
                                </div>
                            </div>
                            <div className="course-tab-list nav pt-40 pb-25 mb-35">
                                <a className="active" href="#course-details-1" data-bs-toggle="tab" >
                                    <h4>Over View  </h4>
                                </a>
                                <a href="#course-details-2" data-bs-toggle="tab">
                                    <h4>Instructor </h4>
                                </a>
                                <a href="#course-details-3" data-bs-toggle="tab">
                                    <h4> Reviews </h4>
                                </a>
                            </div>
                            <div className="tab-content jump">
                                <div className="tab-pane active" id="course-details-1">
                                    <div className="over-view-content">
                                        <h4>COURSE  DETAILS</h4>
                                        <h5>Course Name : Grphic Design & Multimedia</h5>
                                        <p>magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi m aperiam, eaque ipsa quae abaspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        <div className="over-view-list">
                                            <div className="sin-over-view-list">
                                                <div className="course-list-icon">
                                                    <i className="fa fa-check"></i> .
                                                </div>
                                                <div className="course-list-content">
                                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                                                </div>
                                            </div>
                                            <div className="sin-over-view-list">
                                                <div className="course-list-icon">
                                                    <i className="fa fa-check"></i> .
                                                </div>
                                                <div className="course-list-content">
                                                    <p> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                                                </div>
                                            </div>
                                            <div className="sin-over-view-list">
                                                <div className="course-list-icon">
                                                    <i className="fa fa-check"></i> .
                                                </div>
                                                <div className="course-list-content">
                                                    <p>Es eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="course-details-img">
                                            <img src="../assets/img/banner/course-details-1.jpg" alt="" />
                                        </div>
                                        <div className="course-summary-wrap">
                                            <div className="single-course-summary">
                                                <h4>Total Students</h4>
                                                <span><i className="fa fa-user"></i> 50</span>
                                            </div>
                                            <div className="single-course-summary">
                                                <h4>Course Duration</h4>
                                                <span><i className="fa fa-clock-o"></i> 4yrs</span>
                                            </div>
                                            <div className="single-course-summary">
                                                <h4>Course Credits</h4>
                                                <span><i className="fa fa-diamond"></i> 125</span>
                                            </div>
                                            <div className="single-course-summary">
                                                <h4>Total Semester</h4>
                                                <span><i className="fa fa-book"></i> 12</span>
                                            </div>
                                        </div>
                                        <p>magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi m aperiam, eaque ipsa quae abaspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    </div>
                                </div>
                                <div className="tab-pane" id="course-details-2">
                                    <div className="over-view-content">
                                        <h4>INSTRUCTOR</h4>
                                        <h5>Head Of The Department  : Ara’af Imtiaz</h5>
                                        <p>magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi m aperiam, eaque ipsa quae abaspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        <div className="over-view-list">
                                            <div className="sin-over-view-list">
                                                <div className="course-list-icon">
                                                    <i className="fa fa-check"></i> .
                                                </div>
                                                <div className="course-list-content">
                                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                                                </div>
                                            </div>
                                            <div className="sin-over-view-list">
                                                <div className="course-list-icon">
                                                    <i className="fa fa-check"></i> .
                                                </div>
                                                <div className="course-list-content">
                                                    <p> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                                                </div>
                                            </div>
                                            <div className="sin-over-view-list">
                                                <div className="course-list-icon">
                                                    <i className="fa fa-check"></i> .
                                                </div>
                                                <div className="course-list-content">
                                                    <p>Es eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="course-details-img">
                                            <img src="../assets/img/banner/course-details-1.jpg" alt="" />
                                        </div>
                                        <div className="course-summary-wrap">
                                            <div className="single-course-summary">
                                                <h4>Total Students</h4>
                                                <span><i className="fa fa-user"></i> 50</span>
                                            </div>
                                            <div className="single-course-summary">
                                                <h4>Course Duration</h4>
                                                <span><i className="fa fa-clock-o"></i> 4yrs</span>
                                            </div>
                                            <div className="single-course-summary">
                                                <h4>Course Credits</h4>
                                                <span><i className="fa fa-diamond"></i> 125</span>
                                            </div>
                                            <div className="single-course-summary">
                                                <h4>Total Semester</h4>
                                                <span><i className="fa fa-book"></i> 12</span>
                                            </div>
                                        </div>
                                        <p>magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi m aperiam, eaque ipsa quae abaspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    </div>
                                </div>
                                <div className="tab-pane" id="course-details-3">
                                    <div className="review-wrapper">
                                        <div className="single-review">
                                            <div className="review-img">
                                                <img src="../assets/img/blog/recent-post-1.jpg" alt="" />
                                            </div>
                                            <div className="review-content">
                                                <div className="review-top-wrap">
                                                    <div className="review-left">
                                                        <div className="review-name">
                                                            <h4>White Lewis</h4>
                                                        </div>
                                                        <div className="review-rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <div className="review-btn">
                                                        <a href="#">Reply</a>
                                                    </div>
                                                </div>
                                                <div className="review-bottom">
                                                    <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla nec, convallis conval lis leo. Maecenas bibendum bibendum larius.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-review child-review">
                                            <div className="review-img">
                                                <img src="../assets/img/blog/recent-post-2.jpg" alt="" />
                                            </div>
                                            <div className="review-content">
                                                <div className="review-top-wrap">
                                                    <div className="review-left">
                                                        <div className="review-name">
                                                            <h4>White Lewis</h4>
                                                        </div>
                                                        <div className="review-rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <div className="review-btn">
                                                        <a href="#">Reply</a>
                                                    </div>
                                                </div>
                                                <div className="review-bottom">
                                                    <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla nec, convallis conval lis leo. Maecenas bibendum bibendum larius.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ratting-form-wrapper">
                                        <h3>Add a Review</h3>
                                        <div className="ratting-form">
                                            <form>
                                                <div className="star-box">
                                                    <span>Your rating:</span>
                                                    <div className="ratting-star">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="rating-form-style mb-20">
                                                            <input placeholder="Name" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="rating-form-style mb-20">
                                                            <input placeholder="Email" type="email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="rating-form-style form-submit">
                                                            <textarea name="Your Review" placeholder="Message"></textarea>
                                                            <input type="submit" value="Submit" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="related-course pt-70">
                                <div className="related-title mb-45 mrg-bottom-small">
                                    <h3>Related Course</h3>
                                    <p>Hempor incididunt ut labore et dolore mm, itation ullamco laboris <br />nisi ut aliquip. </p>
                                </div>

                                <SliderCourses slides={courses} />
                                
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