import React from 'react';

const EventDetailsLayout = () => {
    return (
        <div className="event-details-area pt-130">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <div className="event-left-wrap mr-40">
                            <div className="event-description">
                                <div className="description-date-social mb-45">
                                    <div className="description-date-time">
                                        <div className="description-date">
                                            <span className="event-date">1st</span>
                                            <span>Dec</span>
                                        </div>
                                        <div className="description-meta-wrap">
                                            <div className="description-meta">
                                                <i className="fa fa-location-arrow"></i>
                                                <span>Mascot Plaza ,Uttara</span>
                                            </div>
                                            <div className="description-meta">
                                                <i className="fa fa-clock-o"></i>
                                                <span>10:30 am</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="description-social-wrap">
                                        <div className="description-social">
                                            <ul>
                                                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                                                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a className="google" href="#"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="description-btn">
                                            <a href="#"><i className="fa fa-share-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <img src="assets/img/event/event-details.jpg" alt="" />
                                <h3>Lorem ipsum doloeiusmod tempor incididunt ut labore et dolore magnnisi ut aliquip ex ea commodo consequ.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dorepre enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu antium dolorem laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo en ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem snesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                <div className="event-gallery text-center mt-40">
                                    <div className="event-gallery-active nav-style-3 owl-carousel">
                                        <img src="assets/img/event/event-gallery-1.jpg" alt="" />
                                        <img src="assets/img/event/event-gallery-2.jpg" alt="" />
                                    </div>
                                    <h4>View Our Event Gallery</h4>
                                </div>
                                <div className="seat-book-wrap bg-img mt-80 ">
                                    <div className="seat-book-title text-center">
                                        <h3>Book Your Seat Now</h3>
                                        <p> natus error sit voluptatem accu antium dolorem laudantium, totam rem aperiam, eaque entore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                    <div className="seat-book-form">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <input placeholder="Name" type="text" />
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <input placeholder="Email" type="email" />
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <input name="name" placeholder="Date" type="text" />
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <input placeholder="Time" type="text" />
                                                </div>
                                                <div className="col-lg-12">
                                                    <textarea placeholder="Message"></textarea>
                                                    <button className="seat-book-btn" type="submit">BOOK NOW</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="location-area mt-80">
                                    <div id="location"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <div className="sidebar-style">
                            <div className="sidebar-search mb-40">
                                <div className="sidebar-title mb-40">
                                    <h4>Search</h4>
                                </div>
                                <form>
                                    <input type="text" placeholder="Search" />
                                    <button><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                            <div className="sidebar-about mb-40">
                                <div className="sidebar-title mb-15">
                                    <h4>About Us</h4>
                                </div>
                                <p>quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolors eos qui ratione voluptatem sad.</p>
                                <a href="#"><img src="assets/img/banner/banner-4.jpg" alt="" /></a>
                                <div className="sidebar-social">
                                    <ul>
                                        <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a className="youtube" href="#"><i className="fa fa-youtube-play"></i></a></li>
                                        <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a className="google" href="#"><i className="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-recent-post mb-35">
                                <div className="sidebar-title mb-40">
                                    <h4>Recent Post</h4>
                                </div>
                                <div className="recent-post-wrap">
                                    <div className="single-recent-post">
                                        <div className="recent-post-img">
                                            <a href="#"><img src="assets/img/blog/recent-post-1.jpg" alt="" /></a>
                                        </div>
                                        <div className="recent-post-content">
                                            <h5><a href="#">Blog title will be here.</a></h5>
                                            <span>Blog Category</span>
                                            <p>Datat non proident qui offici.hafw adec qart.</p>
                                        </div>
                                    </div>
                                    <div className="single-recent-post">
                                        <div className="recent-post-img">
                                            <a href="#"><img src="assets/img/blog/recent-post-2.jpg" alt="" /></a>
                                        </div>
                                        <div className="recent-post-content">
                                            <h5><a href="#">Blog title will be here.</a></h5>
                                            <span>Blog Category</span>
                                            <p>Datat non proident qui offici.hafw adec qart.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-category mb-40">
                                <div className="sidebar-title mb-40">
                                    <h4>Course Category</h4>
                                </div>
                                <div className="category-list">
                                    <ul>
                                        <li><a href="#">MBA <span>04</span></a></li>
                                        <li><a href="#">Graduate <span>08</span></a></li>
                                        <li><a href="#">Under Graduate <span>04</span></a></li>
                                        <li><a href="#">BBA <span>06</span></a></li>
                                        <li><a href="#">Engineering <span>04</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-recent-course-wrap mb-40">
                                <div className="sidebar-title mb-40">
                                    <h4>Recent Courses</h4>
                                </div>
                                <div className="sidebar-recent-course">
                                    <div className="sin-sidebar-recent-course">
                                        <div className="sidebar-recent-course-img">
                                            <a href="#"><img src="assets/img/blog/recent-post-1.jpg" alt="" /></a>
                                        </div>
                                        <div className="sidebar-recent-course-content">
                                            <h4><a href="#">Course Title</a></h4>
                                            <ul>
                                                <li>Credits : 125</li>
                                                <li className="duration-color">Duration : 4yrs</li>
                                            </ul>
                                            <p>Datat non proident qui offici.hafw adec qart.</p>
                                        </div>
                                    </div>
                                    <div className="sin-sidebar-recent-course">
                                        <div className="sidebar-recent-course-img">
                                            <a href="#"><img src="assets/img/blog/recent-post-2.jpg" alt="" /></a>
                                        </div>
                                        <div className="sidebar-recent-course-content">
                                            <h4><a href="#">Course Title</a></h4>
                                            <ul>
                                                <li>Credits : 125</li>
                                                <li className="duration-color">Duration : 4yrs</li>
                                            </ul>
                                            <p>Datat non proident qui offici.hafw adec qart.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-tag-wrap">
                                <div className="sidebar-title mb-40">
                                    <h4>Tag</h4>
                                </div>
                                <div className="sidebar-tag">
                                    <ul>
                                        <li><a href="#">Loremsite</a></li>
                                        <li><a href="#">Loreipsum</a></li>
                                        <li><a href="#">Dolar</a></li>
                                        <li><a href="#">Site ament dollar</a></li>
                                        <li><a href="#">Loremsite</a></li>
                                        <li><a href="#">Dummy Text</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EventDetailsLayout;