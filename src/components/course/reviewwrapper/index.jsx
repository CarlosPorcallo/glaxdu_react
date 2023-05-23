import React from 'react';

// components
import SingleReview from '../../singlereview';

const ReviewWrapper = ({reviews}) => {
    return (
        <div className="review-wrapper">
            {reviews.map((review) => (
                <SingleReview 
                    key={Math.random()}
                    review={review} 
                />
            ))}
        </div>
    );
}
 
export default ReviewWrapper;