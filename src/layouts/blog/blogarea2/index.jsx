import React from 'react';
import {posts} from '../../../config/blog';

// components
import Card from '../../../components/blog/card';
import Paginator from '../../../components/paginator';

// layouts
import Sidebar from '../../sidebar';

const BlogArea2 = () => {
    return (
        <div class="event-area pt-130 pb-130">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 col-lg-8">
                        <div class="blog-all-wrap mr-40">
                            <div className="row">
                                {posts.map((feed) => (
                                    <div 
                                        key={Math.random()}
                                        className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                                    >
                                        <Card feed={feed} />
                                    </div>
                                ))}
                            </div>
                            <Paginator />
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
 
export default BlogArea2;