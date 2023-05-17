import {React, Fragment} from 'react';
import { Link } from 'react-router-dom';

// settings
import {company} from '../../config/footer';

// layouts
import SocialNetwork from '../socialnetwork';
import NewsLatter from '../../components/forms/newslatter';
import AboutUsFooter from '../about/aboutusfooter';

const Footer = () => {
    const date = new Date();
    return (
        <Fragment>
            <footer className="footer-area">
                <div className="footer-top bg-img default-overlay pt-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <AboutUsFooter />
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="footer-widget mb-40">
                                    <div className="footer-title">
                                        <h4>QUICK LINK</h4>
                                    </div>
                                    <div className="footer-list">
                                        <ul>
                                            <li><Link to="/home">Home</Link></li>
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="/course">Courses</Link></li>
                                            <li><Link to="/admission">Admission</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="footer-widget negative-mrg-30 mb-40">
                                    <div className="footer-title">
                                        <h4>COURSES</h4>
                                    </div>
                                    <div className="footer-list">
                                        <ul>
                                            <li><a href="#">Under Graduate Programmes </a></li>
                                            <li><a href="#">Graduate Programmes </a></li>
                                            <li><a href="#">Diploma Courses</a></li>
                                            <li><a href="#">Others Programmes</a></li>
                                            <li><a href="#">Short Courses</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-widget mb-40">
                                    <div className="footer-title">
                                        <h4>GALLERY</h4>
                                    </div>
                                    <div className="footer-gallery">
                                        <ul>
                                            <li><a href="#"><img src="../../assets/img/gallery/gallery-1.png" alt="" /></a></li>
                                            <li><a href="#"><img src="../../assets/img/gallery/gallery-2.png" alt="" /></a></li>
                                            <li><a href="#"><img src="../../assets/img/gallery/gallery-3.png" alt="" /></a></li>
                                            <li><a href="#"><img src="../../assets/img/gallery/gallery-4.png" alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <NewsLatter />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-15 pb-15">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12">
                                <div className="copyright">
                                    <p>
                                        Copyright ©
                                        <a href="#">{company}</a>
                                        {date.getFullYear()} All Right Reserved.
                                    </p>
                                </div>
                            </div>
                            <SocialNetwork />
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}
 
export default Footer;