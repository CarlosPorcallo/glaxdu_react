import React from 'react';
import {share} from '../../../config/blog';
import {courses} from '../../../config/courses';

// layouts
import Sidebar from '../../sidebar';

// components
import BlogDetails from '../../../components/blog/detail/blogdetails';
import Author from '../../../components/blog/detail/author';
import RelatedCourse from '../../../components/blog/detail/relatedcourse';
import BlogComment from '../../../components/blog/detail/blogcomment';

const Detail = ({detail_post}) => {
    return (
        <div class="event-area pt-130 pb-130">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 col-lg-8">
                        <div class="blog-details-wrap mr-40">
                            <BlogDetails 
                                share={share}
                                detail_post={detail_post} 
                            />
                            <Author detail_post={detail_post} />
                            <RelatedCourse courses={courses} />
                            <BlogComment comments={detail_post.comments} />
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Detail;