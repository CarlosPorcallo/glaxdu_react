import {React, Fragment} from 'react';
import {caption, courses, img_background} from '../../../config/courses';
import {brands} from '../../../config/branding';

// layouts
import Header from '../../../layouts/header';
import CourseArea from '../../../layouts/course/coursearea';
import CourseGrid from '../../../layouts/course/coursegrid';
import Footer from '../../../layouts/footer';
import BrandLogoArea from '../../../layouts/branding/brandlogoarea';

const Course = () => {
    return (
        <Fragment>
            <Header />
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
            <Footer />
        </Fragment>
    );
}
 
export default Course;