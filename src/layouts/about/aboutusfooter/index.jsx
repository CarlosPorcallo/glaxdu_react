import React from 'react';

// middleware
import {getEmailContact, getPhone, getAboutCaption, getUserContact} from '../../../middleware/getters/header';

const AboutUsFooter = () => {
    const email_contact = getEmailContact();
    const phone = getPhone();
    const about_caption = getAboutCaption();
    const user_contact = getUserContact();
    return (
        <div className="footer-widget mb-40">
            <div className="footer-title">
                <h4>ABOUT US</h4>
            </div>
            <div className="footer-about">
                {about_caption.map((p) => (
                    <p>{p}</p>
                ))}
                <div className="f-contact-info">
                    <div className="single-f-contact-info">
                        <i className="fa fa-home"></i>
                        <span>{user_contact}</span>
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