import React from 'react';

const Contact = (action) => {
    return (
        <form id="contact-form" action={action} method="post">
            <input name="name" placeholder="Name*" type="text" />
            <input name="email" placeholder="Email*" type="email" />
            <input name="subject" placeholder="Subject*" type="text" />
            <textarea name="message" placeholder="Message"></textarea>
            <button className="submit btn-style" type="submit">SEND MESSAGE</button>
        </form>
    );
}
 
export default Contact;