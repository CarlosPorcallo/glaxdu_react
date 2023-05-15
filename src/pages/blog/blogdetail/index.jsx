import {React, Fragment} from 'react';

import Header from '../../../layouts/header';
import Footer from '../../../layouts/footer';
import Detail from '../../../layouts/blog/blogdetail';

const BlogDetail = () => {
    return (
        <Fragment>
            <Header />
            <Detail />
            <Footer />
        </Fragment>
    );
}
 
export default BlogDetail;