// se importan datos, configuraciones y la mock data
import {about, about_cards, about_banner, about_banner2, about_banner3, width, height, video_src, company} from '../../../config/about';

// sección home
export const getWidthVideo = () => {
    return width;
};

export const getHeightVideo = () => {
    return height;
};

export const getVideoSrc = () => {
    return video_src;
};

// sección about
export const getAboutCards = () => {
    return about_cards;
};

export const getAboutBanner = () => {
    return about_banner;
};

export const getAboutBanner2 = () => {
    return about_banner2;
};

export const getBgImg = () => {
    return about_banner3;
};

// sidebar
export const getAbout = () => {
    return about;
};

// footer
export const getCompany = () => {
    return company;
};