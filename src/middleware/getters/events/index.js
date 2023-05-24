// trayendo la mock data
import {caption, slides} from '../../../config/events';

// sección home
export const getCaptionEvents = () => {
    return caption;
};

export const getSlidesEvents = () => {
    return slides;
};

export const getEvent = (id) => {
    // de manera provisional se retorna un elemento desde la mock data, posteriormente se consumirá esta info desde el backend
    for (let i = 0; i < slides.length; i++) {
        if (parseInt(slides[i].id) === parseInt(id)) {
            return slides[i];
        }
    }
};