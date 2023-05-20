// trayendo la mock data
import {detail_post, caption, posts} from '../../../config/blog';

// sección home
export const getCaptionBlog = () => {
    return caption;
};

export const getPosts = () => {
    return posts;
};

// detalle de blog
export const getDetailPost = () => {
    return detail_post;
};