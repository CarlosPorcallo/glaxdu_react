import {React, Fragment} from 'react';
import {caption, courses, img_background} from '../../../config/courses';
import {brands} from '../../../config/branding';

// middleware
import {getEmailContact, getPhone, getPathsNavbar, getHeaderImg} from '../../../middleware/getters/header';
import {getCompany} from '../../../middleware/getters/about';
import {getSocialNetworks} from '../../../middleware/getters/social';

// layouts
import Header from '../../../layouts/header';
import CourseArea from '../../../layouts/course/coursearea';
import CourseGrid from '../../../layouts/course/coursegrid';
import Footer from '../../../layouts/footer';
import BrandLogoArea from '../../../layouts/branding/brandlogoarea';

const Course = () => {
    // header
    const email_contact = getEmailContact();
    const phone = getPhone();
    const paths = getPathsNavbar();
    const header_img = getHeaderImg();
    // footer
    const company = getCompany();
    const social_networks = getSocialNetworks();
    return (
        <Fragment>
            <Header 
                email_contact={email_contact}
                phone={phone}
                paths={paths}
                header_img={header_img}
            />
            <CourseGrid />
            <CourseArea 
                caption={caption}
                courses={courses}
                img_background={img_background}
            />
            <CourseArea
                caption={caption}
                courses={courses}
                img_background={img_background}
            />
            <CourseArea
                caption={caption}
                courses={courses}
                img_background={img_background}
            />
            <br /><br />
            <br /><br />
            <Footer 
                company={company}
                social={social_networks}
            />
        </Fragment>
    );
}
 
export default Course;