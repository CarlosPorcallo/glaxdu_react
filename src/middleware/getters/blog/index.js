// trayendo la mock data
import {caption, posts} from '../../../config/blog';

// sección home
export const getCaptionBlog = () => {
    return caption;
};

export const getPosts = () => {
    return posts;
};

// detalle de blog
export const getDetailPost = (id) => {
    // de manera provisional se retorna un elemento desde la mock data, posteriormente se consumirá esta info desde el backend
    for (let i = 0; i < posts.length; i++) {
        if (parseInt(posts[i].id) == parseInt(id)) {
            return posts[i];
        }
    }
};