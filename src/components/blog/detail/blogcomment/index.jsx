import {React, Fragment, useState} from 'react';

// components
import Comment from './comment';
import FormComment from '../../../forms/comment';

const BlogComment = ({comments}) => {
    const [showComments, setShowComments] = useState(false);
    return (
        <Fragment>
            <div class="blog-comment">
                <div class="blog-comment-btn mb-80 commrnt-toggle">
                    <a onClick={() => setShowComments(!showComments)}>VIEW COMMENT</a>
                </div>
                {showComments ?  
                    <div class="blog-comment-content-wrap">
                        <h4>COMMENT</h4>
                        {comments.map((comment) => (
                            <Comment comment={comment} />
                        ))}
                    </div>
                : null}
            </div>
            <div class="leave-comment-area">
                <h3>Leave A Comment</h3>
                <FormComment />
            </div>
        </Fragment>
    );
}
 
export default BlogComment;