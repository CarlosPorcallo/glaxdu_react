import {React, Fragment} from 'react';

// middleware
import {getDetail, getRelatedCourses} from '../../../middleware/courses';

// layouts
import Header from '../../../layouts/header';
import CourseGrid from '../../../layouts/course/coursegrid';
import CourseDetailsArea from '../../../layouts/course/coursedetailsarea';
import BrandLogoArea from '../../../layouts/branding/brandlogoarea';
import Footer from '../../../layouts/footer';

const CourseDetails = () => {
    // obteniendo detalle del curso (provisional)
    const course = getDetail();

    // obteniendo los cursos relacionados
    const related_courses = getRelatedCourses();

    return (
        <Fragment>
            <Header />
            <CourseGrid />
            <CourseDetailsArea 
                course={course} 
                courses={related_courses}
            />
            <Footer />
        </Fragment>
    );
}
 
export default CourseDetails;