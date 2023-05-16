import React from 'react';

const Card = ({feed}) => {
    return (
        <div className="single-blog mb-30">
            <div className="blog-img">
                <a href={feed.href}><img src={feed.img.src} alt={feed.img.alt} /></a>
            </div>
            <div className="blog-content-wrap">
                <span>{feed.tag}</span>
                <div className="blog-content">
                    <h4><a href={feed.href}>{feed.heading}</a></h4>
                    {feed.paragraphs.map((p) => (
                        <p>{p}</p>
                    ))}
                    <div className="blog-meta">
                        <ul>
                            <li><a href="#"><i className="fa fa-user"></i> {feed.user}</a></li>
                            <li><a href="#"><i className="fa fa-comments-o"></i> {feed.qty_comments}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="blog-date">
                    <a href="#"><i className="fa fa-calendar-o"></i> {feed.date}</a>
                </div>
            </div>
        </div>
    );
}
 
export default Card;