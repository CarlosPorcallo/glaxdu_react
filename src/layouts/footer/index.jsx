import {React, Fragment, useContext} from 'react';
import { Link } from 'react-router-dom';

// context
import {HeaderFooterContext} from '../../middleware/context/headerfooter';

// layouts
import SocialNetwork from '../socialnetwork';
import NewsLatter from '../../components/forms/newslatter';
import AboutUsFooter from '../about/aboutusfooter';

// components
import Gallery from '../../components/footer/gallery';

const Footer = () => {
    const {date, company, social, gallery} = useContext(HeaderFooterContext);
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
                                    <Gallery pictures={gallery} />
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
                            <SocialNetwork social={social} />
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}
 
export default Footer;