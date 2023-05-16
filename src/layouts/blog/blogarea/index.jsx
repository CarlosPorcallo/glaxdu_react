import React from 'react';
import {caption, newsfeed} from '../../../config/blog';

// components
import Card from '../../../components/blog/card';

const BlogArea = () => {

    return (
        <div className="blog-area pt-130 pb-100">
            <div className="container">
                <div className="section-title mb-75">
                    <h2>Our <span>Newsfeed</span></h2>
                    <p>{caption}</p>
                </div>
                <div className="row">
                    {newsfeed.map((feed) => (
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