import {React, Fragment} from 'react';

// components
import Header from '../../../layouts/header';
import BlogGrid from '../../../layouts/blog/bloggrid';
import EventArea from '../../../layouts/event/eventarea3';
import Footer from '../../../layouts/footer';

const Blog = () => {
    return (
        <Fragment>
            <Header />
            <BlogGrid />
            <EventArea />
            <Footer />
        </Fragment>
    );
}
 
export default Blog;