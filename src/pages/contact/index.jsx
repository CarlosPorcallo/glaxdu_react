import {React, Fragment} from 'react';

// layouts
import Header from '../../layouts/header';
import ContactGrid from '../../layouts/contact/contactgrid';
import ContactForm from '../../layouts/contact/contactform';
import ContactInfoArea from '../../layouts/contact/contactinfoarea';
import Footer from '../../layouts/footer';

const Contact = () => {
    return (
        <Fragment>
            <Header />
            <ContactGrid />
            <ContactForm />
            <ContactInfoArea />
            <Footer />
        </Fragment>
    );
}
 
export default Contact;