import {React, Fragment} from 'react';

// middleware
import {getPosts} from '../../../middleware/getters/blog';

// context
import {PaginatorProvider} from '../../../middleware/context/paginator';

// components
import Header from '../../../layouts/header';
import BlogGrid from '../../../layouts/blog/bloggrid';
import BlogArea from '../../../layouts/blog/blogarea2';
import Footer from '../../../layouts/footer';

const Blog = () => {
    const posts = getPosts();
    return (
        <Fragment>
            <Header />
            <BlogGrid />
            <PaginatorProvider>
                <BlogArea posts={posts} />
            </PaginatorProvider>
            <Footer />
        </Fragment>
    );
}
 
export default Blog;