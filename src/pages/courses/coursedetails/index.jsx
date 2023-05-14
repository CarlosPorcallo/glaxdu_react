import {React, Fragment} from 'react';

import Header from '../../../layouts/header';
import CourseGrid from '../../../layouts/course/coursegrid';
import CourseDetailsArea from '../../../layouts/course/coursedetailsarea';
import BrandLogoArea from '../../../layouts/branding/brandlogoarea';
import Footer from '../../../layouts/footer';

const CourseDetails = () => {
    return (
        <Fragment>
            <Header />
            <CourseGrid />
            <CourseDetailsArea />
            <Footer />
        </Fragment>
    );
}
 
export default CourseDetails;