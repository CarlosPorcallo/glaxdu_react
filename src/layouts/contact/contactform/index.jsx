import React from 'react';

import Contact from '../../../components/forms/contact';
import Map from '../../../components/map';

const ContactForm = () => {
    return (
        <div className="contact-area pt-130 pb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="contact-map mr-70">
                            <Map />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="contact-form">
                            <div className="contact-title mb-45">
                                <h2>Stay <span>Connected</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipis do eiusmod tempor indunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <Contact action="" />
                            <p className="form-messege"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ContactForm;