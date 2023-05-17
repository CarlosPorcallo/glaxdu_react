import React from 'react';

// components
import Paragraph from '../paragraphs';
import SocialNetwork from '../../../socialnetwork';
import Tag from '../../../tag';

const BlogDetails = ({share, detail_post}) => {
    const img_post = require('../../../../assets/img/blog/'+detail_post.img.src)
    return (
        <div class="blog-details-top">
            <img src={img_post} alt={detail_post.img.alt} />
            <div class="blog-details-content-wrap">
                <div class="b-details-meta-wrap">
                    <div class="b-details-meta">
                        <ul>
                            <li><i class="fa fa-calendar-o"></i> {detail_post.date}</li>
                            <li><i class="fa fa-user"></i> {detail_post.author.name}</li>
                            <li><i class="fa fa-comments-o"></i> {detail_post.comments.length}</li>
                        </ul>
                    </div>
                    <span>{detail_post.category}</span>
                </div>
                <h3>{detail_post.title}</h3>
                {detail_post.paragraphs.map((p) => (
                    <Paragraph
                        key={Math.random()} 
                        p={p} 
                    />
                ))}
                <div class="blog-share-tags">
                    <div class="blog-share">
                        <div class="blog-btn">
                            <a href="#"><i class="fa fa-share-alt"></i></a>
                        </div>
                        <div class="blog-social">
                            <SocialNetwork social={share} />
                        </div>
                    </div>
                    <div class="blog-tag">
                        <ul>
                            {detail_post.tags.map((tag) => (
                                <Tag tag={tag} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BlogDetails;