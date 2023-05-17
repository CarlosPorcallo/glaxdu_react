import React from 'react';
 
const Comment = ({comment}) => {
    const img = require('../../../../../assets/img/blog/'+comment.img.src);
    return (
        <div class="single-blog-comment">
            <div class="blog-comment-img">
                <img src={img} alt={comment.img.alt} />
            </div>
            <div class="blog-comment-content">
                <h5>{comment.title}</h5>
                {comment.paragraphs.map((p) => (
                    <p>{p}</p>
                ))}
                <a href="#">Reply</a>
            </div>
        </div>
    );
}
 
export default Comment;