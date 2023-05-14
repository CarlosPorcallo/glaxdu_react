import {React, Fragment} from 'react';

import Header from '../../../layouts/header';
import CourseArea2 from '../../../layouts/course/coursearea2';
import CourseGrid from '../../../layouts/course/coursegrid';
import Footer from '../../../layouts/footer';

const Course = () => {
    return (
        <Fragment>
            <Header />
            <CourseGrid />
            <CourseArea2 />
            <CourseArea2 />
            <CourseArea2 />
            <Footer />
        </Fragment>
    );
}
 
export default Course;