import React from 'react';
import {caption, posts} from '../../../config/blog';

// components
import Card from '../../../components/blog/card';

const BlogArea = ({title}) => {

    return (
        <div className="blog-area pt-130 pb-100">
            <div className="container">
                {title ? 
                    <div className="section-title mb-75">
                        <h2>Our <span>posts</span></h2>
                        <p>{caption}</p>
                    </div>
                : null
                }
                <div className="row">
                    {posts.map((feed) => (
                        <div className="col-lg-3 col-md-6">
                            <Card 
                                feed={feed}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default BlogArea;