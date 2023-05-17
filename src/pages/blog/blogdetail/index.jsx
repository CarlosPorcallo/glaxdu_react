import {React, Fragment} from 'react';
import {detail_post} from '../../../config/blog';

// layouts
import Header from '../../../layouts/header';
import Footer from '../../../layouts/footer';
import Detail from '../../../layouts/blog/blogdetail';
import BlogDetailGrid from '../../../layouts/blog/blogdetailgrid';

const BlogDetail = () => {
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