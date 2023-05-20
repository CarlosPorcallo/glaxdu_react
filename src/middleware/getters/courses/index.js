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
export const getDetail = () => {
    // de manera provisional se retorna un elemento al azar, posteriormente se consumirá esta info desde el backend

    // se obtiene un index aleatorio
    const index = Math.floor(Math.random() * courses.length);
    return courses[index];
};

export const getRelatedCourses = () => {
    // de manera provisional se retorna el arreglo completo, posteriormente se desarrollará la lógica para traer desde el backend esta info
    return courses;
};