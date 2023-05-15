import React from 'react';

const ContactInfoArea = () => {
    return (
        <div class="contact-info-area bg-img pt-180 pb-140 default-overlay" style={{backgroundImage: "../assets/img/bg/contact-info.jpg"}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-12">
                        <div class="single-contact-info mb-30 text-center">
                            <div class="contact-info-icon">
                                <span><i class="fa fa-calendar-o"></i></span>
                            </div>
                            <p>Uttara, Dhaka, Bangladesh <br />Opposite site Of Yellow.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12">
                        <div class="single-contact-info mb-30 text-center">
                            <div class="contact-info-icon">
                                <span><i class="fa fa-calendar-o"></i></span>
                            </div>
                            <div class="contact-info-phn">
                                <div class="info-phn-title">
                                    <span>Phone : </span>
                                </div>
                                <div class="info-phn-number">
                                    <p>+091111111111</p>
                                    <p>+091111111111</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12">
                        <div class="single-contact-info mb-30 text-center">
                            <div class="contact-info-icon">
                                <span><i class="fa fa-calendar-o"></i></span>
                            </div>
                            <a href="#">education@email.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ContactInfoArea;