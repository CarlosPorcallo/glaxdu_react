// trayendo la mock data
import {courses, caption, img_background} from '../../../config/courses';

// sección home
export const getCaptionCourses = () => {
    return caption;
};

export const getImgBackground = () => {
    return img_background;
};

export const getCourses = () => {
    // de manera provisional se retorna el arreglo completo, posteriormente se desarrollará la lógica para traer desde el backend esta info
    return courses;
};

// sección detalle de curso
export const getDetail = (id) => {
    // de manera provisional se retorna un elemento desde la mock data, posteriormente se consumirá esta info desde el backend
    for (let i = 0; i < courses.length; i++) {
        if (parseInt(courses[i].id) === parseInt(id)) {
            return courses[i];
        }
    }
};

export const getRelatedCourses = () => {
    // de manera provisional se retorna el arreglo completo, posteriormente se desarrollará la lógica para traer desde el backend esta info
    return courses;
};