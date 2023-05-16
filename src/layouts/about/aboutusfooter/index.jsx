import React from 'react';

// settings
import {email_contact, phone} from '../../../config/header';
//import {} from '../../../config/footer';

const AboutUsFooter = () => {
    return (
        <div className="footer-widget mb-40">
            <div className="footer-title">
                <h4>ABOUT US</h4>
            </div>
            <div className="footer-about">
                <p>Ugiat nulla pariatur. Edeserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natu</p>
                <div className="f-contact-info">
                    <div className="single-f-contact-info">
                        <i className="fa fa-home"></i>
                        <span>Uttara, Dhaka, Bangladesh</span>
                    </div>
                    <div className="single-f-contact-info">
                        <i className="fa fa-envelope-o"></i>
                        <span><a href={"mailto:"+email_contact}>{email_contact}</a></span>
                    </div>
                    <div className="single-f-contact-info">
                        <i className="fa fa-phone"></i>
                        <span> {phone}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AboutUsFooter;