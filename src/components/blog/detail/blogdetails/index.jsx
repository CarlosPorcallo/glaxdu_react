import React from 'react';

// components
import Paragraph from '../paragraphs';
import SocialNetwork from '../../../socialnetwork';
import Tag from '../../../tag';

const BlogDetails = ({share, detail_post}) => {
    const img_post = require('../../../../assets/img/blog/'+detail_post.img.src)
    return (
        <div className="blog-details-top">
            <img src={img_post} alt={detail_post.img.alt} />
            <div className="blog-details-content-wrap">
                <div className="b-details-meta-wrap">
                    <div className="b-details-meta">
                        <ul>
                            <li><i className="fa fa-calendar-o"></i> {detail_post.date}</li>
                            <li><i className="fa fa-user"></i> {detail_post.author.name}</li>
                            <li><i className="fa fa-comments-o"></i> {detail_post.comments.length}</li>
                        </ul>
                    </div>
                    <span>{detail_post.category}</span>
                </div>
                <h3>{detail_post.heading}</h3>
                {detail_post.paragraphs_full_article.map((p) => (
                    <Paragraph
                        key={Math.random()} 
                        p={p} 
                    />
                ))}
                <div className="blog-share-tags">
                    <div className="blog-share">
                        <div className="blog-btn">
                            <a href="#"><i className="fa fa-share-alt"></i></a>
                        </div>
                        <div className="blog-social">
                            <SocialNetwork social={share} />
                        </div>
                    </div>
                    <div className="blog-tag">
                        <ul>
                            {detail_post.tags.map((tag) => (
                                <Tag 
                                    key={Math.random()}
                                    tag={tag} 
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BlogDetails;