import React from 'react';

// components
import SocialNetwork from '../../../socialnetwork';

const Author = ({detail_post}) => {
    const img_profile = require('../../../../assets/img/blog/'+detail_post.author.profile_pic.src);
    return (
        <div class="blog-author mt-80">
            <div class="author-img">
                <img src={img_profile} alt={detail_post.author.profile_pic.alt} />
            </div>
            <div class="author-content">
                <div class="author-content-top">
                    <div class="blog-designation">
                        <h5>{detail_post.author.name}</h5>
                        <span>Author</span>
                    </div>
                    <div class="author-social">
                        <SocialNetwork social={detail_post.author.networks} />
                    </div>
                </div>
                <p>{detail_post.author.summary}</p>
            </div>
        </div>
    );
}
 
export default Author;