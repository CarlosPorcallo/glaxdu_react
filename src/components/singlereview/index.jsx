import React from 'react';

const SingleReview = ({review}) => {
    const img = "../../assets/img/blog/"+review.img.src;
    const rating = [];
    for (let i = 0; i < review.rating; i++) {
        rating.push(<i key={Math.random()} className="fa fa-star"></i>)
    }
    return (
        <div className={review.className}>
            <div className="review-img">
                <img src={img} alt={review.img.alt} />
            </div>
            <div className="review-content">
                <div className="review-top-wrap">
                    <div className="review-left">
                        <div className="review-name">
                            <h4>{review.author}</h4>
                        </div>
                        <div className="review-rating">
                            {rating.map((rate) => (
                                <span key={Math.random()}>{rate}</span>
                            ))}
                        </div>
                    </div>
                    <div className="review-btn">
                        <a href="#">Reply</a>
                    </div>
                </div>
                <div className="review-bottom">
                    {review.paragraphs.map((p) => (
                        <p key={Math.random()}>{p}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default SingleReview;