import React from 'react';
import { Link } from 'react-router-dom';

const SideCard = ({post}) => {
    const img = require('../../../assets/img/blog/'+post.img.src);
    return (
        <div className="single-recent-post">
            <div className="recent-post-img">
                <Link to={post.href}><img src={img} alt={post.img.alt} /></Link>
            </div>
            <div className="recent-post-content">
                <h5>
                    <Link to={post.href}>{post.heading}</Link>
                </h5>
                <span>{post.tag}</span>
                {post.paragraphs.map((p) => (
                    <p key={Math.random()}>{p}</p>
                ))}
            </div>
        </div>
    );
}
 
export default SideCard;