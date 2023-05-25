import {React, Fragment, useContext, useEffect} from 'react';
import {useParams} from 'react-router';

// middleware
import {getDetail, getRelatedCourses} from '../../../middleware/getters/courses';

// context
import {CourseContext} from '../../../middleware/context/course';

// layouts
import Header from '../../../layouts/header';
import CourseGrid from '../../../layouts/course/coursegrid';
import CourseDetailsArea from '../../../layouts/course/coursedetailsarea';
import BrandLogoArea from '../../../layouts/branding/brandlogoarea';
import Footer from '../../../layouts/footer';

const CourseDetails = () => {
    // obteniendo el contexto
    const {setDataCourse, setDataRelatedCourse} = useContext(CourseContext);
    // obteniendo el detalle del curso
    const {id} = useParams();
    const course = getDetail(id);
    
    // obteniendo los cursos relacionados
    const related_courses = getRelatedCourses();

    // se actualizan los datos
    setDataRelatedCourse(related_courses);
    setDataCourse(course);

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