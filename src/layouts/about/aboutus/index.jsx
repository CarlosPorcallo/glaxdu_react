import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// config
import {width, height, video_src, presentacion1} from '../../../config/about';

// components
import Video from '../../../components/video';
import {about1} from '../../../config/about';

const AboutUs = () => {
    return (
        <div className="about-us pt-130 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-content">
                            <div className="section-title section-title-green mb-30">
                                <h2>About <span>Us</span></h2>
                                {about1.map((linea) => (
                                    <p>{linea}</p>
                                ))}
                            </div>
                            <div className="about-btn mt-45">
                                <Link 
                                    className="default-btn"
                                    to="/about"
                                >About Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <Video
                            width={width}
                            height={height}
                            src={video_src}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AboutUs;