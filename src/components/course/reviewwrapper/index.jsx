import React, {useContext, useEffect} from 'react';

// context
import {CourseContext} from '../../../middleware/context/course';

// components
import SingleReview from '../../singlereview';

const ReviewWrapper = ({reviews}) => {
    const {lastIndexReview, lastIndexReply, setLastIndexReview, setlastIndexReply} = useContext(CourseContext);
    const setIndexes = () => {
        let counter = -1;
        // se obtiene el último índice de un comentario
        const last_comment = reviews.slice(counter);
        setLastIndexReview(last_comment.id);
        // se obtiene el último índice de una respuesta
    };
    useEffect(() => {
        setIndexes();
    }, []);
    
    return (
        <div className="review-wrapper">
            {reviews.map((review) => (
                <div>
                    <SingleReview 
                        key={Math.random()}
                        review={review} 
                    />
                    {review.replies.map((reply) => (
                        <SingleReview 
                            key={Math.random()}
                            review={reply} 
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
 
export default ReviewWrapper;