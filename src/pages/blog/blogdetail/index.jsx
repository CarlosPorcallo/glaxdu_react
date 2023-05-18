import {React, Fragment} from 'react';

// middleware
import {getDetailPost} from '../../../middleware/blog';

// layouts
import Header from '../../../layouts/header';
import Footer from '../../../layouts/footer';
import Detail from '../../../layouts/blog/blogdetail';
import BlogDetailGrid from '../../../layouts/blog/blogdetailgrid';

const BlogDetail = () => {
    const detail_post = getDetailPost();
    return (
        <Fragment>
            <Header />
            <BlogDetailGrid />
            <Detail detail_post={detail_post}/>
            <Footer />
        </Fragment>
    );
}
 
export default BlogDetail;