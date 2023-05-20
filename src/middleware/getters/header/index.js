// trayendo la mock data
import {email_contact, phone, about_caption, user_contact, paths, header_img} from '../../../config/header';

// sección header/footer
export const getAboutCaption = () => {
    return about_caption;
};

export const getEmailContact = () => {
    return email_contact;
};

export const getPhone = () => {
    return phone;
};

export const getUserContact = () => {
    return user_contact;
};

export const getPathsNavbar = () => {
    return paths;
};

export const getHeaderImg = () => {
    return header_img;
};