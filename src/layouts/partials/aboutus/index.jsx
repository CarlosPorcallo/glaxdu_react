import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-us pt-130 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-content">
                            <div className="section-title section-title-green mb-30">
                                <h2>About <span>Us</span></h2>
                                <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                            </div>
                            <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven  iam, quis nostrud exer citation ullamco laboris nisi ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                            <div className="about-btn mt-45">
                                <a className="default-btn" href="https://www.youtube.com/watch?v=R1wwopVP7-A">ABOUT US</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/R1wwopVP7-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AboutUs;