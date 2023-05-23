import {React, Fragment} from 'react';
import {useParams} from 'react-router';

// middleware
import {getDetailPost} from '../../../middleware/getters/blog';

// layouts
import Header from '../../../layouts/header';
import Footer from '../../../layouts/footer';
import Detail from '../../../layouts/blog/blogdetail';
import BlogDetailGrid from '../../../layouts/blog/blogdetailgrid';

const BlogDetail = () => {
    const {id} = useParams();
    const detail_post = getDetailPost(id);
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