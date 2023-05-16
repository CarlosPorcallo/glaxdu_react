import {React, Fragment} from 'react';

// components
import Header from '../../../layouts/header';
import BlogGrid from '../../../layouts/blog/bloggrid';
import BlogArea from '../../../layouts/blog/blogarea2';
import Footer from '../../../layouts/footer';

const Blog = () => {
    return (
        <Fragment>
            <Header />
            <BlogGrid />
            <BlogArea />
            <Footer />
        </Fragment>
    );
}
 
export default Blog;