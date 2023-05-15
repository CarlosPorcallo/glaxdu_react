import React from 'react';

const ContactForm = () => {
    return (
        <div className="contact-area pt-130 pb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="contact-map mr-70">
                            <div id="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15064.19784163331!2d-99.1746908!3d19.2802152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce008e162c1259%3A0xabd0af4ac89a7960!2sUniversidad%20Intercontinental%20Plantel%20Sur!5e0!3m2!1ses-419!2smx!4v1684185666760!5m2!1ses-419!2smx" width="600" height="450" style={{border:0}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="contact-form">
                            <div className="contact-title mb-45">
                                <h2>Stay <span>Connected</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipis do eiusmod tempor indunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <form id="contact-form" action="" method="post">
                                <input name="name" placeholder="Name*" type="text" />
                                <input name="email" placeholder="Email*" type="email" />
                                <input name="subject" placeholder="Subject*" type="text" />
                                <textarea name="message" placeholder="Message"></textarea>
                                <button className="submit btn-style" type="submit">SEND MESSAGE</button>
                            </form>
                            <p className="form-messege"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ContactForm;