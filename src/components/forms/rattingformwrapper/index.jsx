import React, {useState, useRef, useContext} from 'react';
import {review_template} from '../../../config/courses';

// context
import {CourseContext} from '../../../middleware/context/course';

const RattingFormWrapper = () => {
    const {course, parentCourse, replyComment, setDataCourse, toggleReplyComment} = useContext(CourseContext);
    const ratings = [1,2,3,4,5];
    const [rate, setRate] = useState(0);
    const reviewForm = useRef({
        ...
        review_template
    });

    const getDiffs = (num1, num2) => {
        let diff = num1 - num2;
        if (diff < 0) {
            diff = diff * -1;
        }
        return diff;
    };

    const toggleRate = id => {
        let aux = rate;
        const diff = getDiffs(id, rate);
        if (id >= rate || rate === 0) { 
            aux = (aux + diff); 
        } else { 
            aux = (aux - diff); 
        }
        
        reviewForm.current["rating"] = aux;
        setRate(aux);
    };

    const UpdateData = e => {
        if (e.target.name !== "message") {
            reviewForm.current[e.target.name] = e.target.value;
        } else {
            reviewForm.current["paragraphs"] = [];
            reviewForm.current["paragraphs"].push(e.target.value);
        }
    };

    const submit = e => {
        e.preventDefault();
        
        // se agrega el comentario al objeto con la información del curso
        // se valida si se trata de la respuesta a un comentario o un nuevo comentario
        if (replyComment) {
            reviewForm.current.className = "single-review child-review";
            for (let i = 0; i < course.current.reviews.length; i++) {
                if (course.current.reviews[i].id == parentCourse.current) {
                    course.current.reviews[i].replies.push(reviewForm.current);
                    break;
                }
            }
        } else {
            course.current.reviews.push({...reviewForm.current});
        }
        
        // se actualiza la información 
        setDataCourse({
            ...course.current
        })

        // se limpia el formulario
        if (replyComment) {
            toggleReplyComment(0);
        }
        reviewForm.current = {
            ...review_template
        };
        setRate(0);
        e.target.reset();
    };

    return (
        <div className="ratting-form-wrapper">
            <h3>Add a {replyComment ? 'Reply': 'Review'}</h3>
            <div className="ratting-form">
                <form onSubmit={submit}>
                    <div className="star-box">
                        <span>Your rating:</span>
                        <div className="ratting-star">
                            {ratings.map((rate_row) => (
                                <span key={Math.random()}>
                                    <i
                                        id={"rate-"+rate}
                                        className={rate_row > rate ? "fa fa-star-o rate" : "fa fa-star rate"}
                                        onClick={() => {toggleRate(rate_row)}}
                                    ></i>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="rating-form-style mb-20">
                                <input
                                    name="author" 
                                    placeholder="Name" 
                                    type="text"
                                    onChange={UpdateData}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="rating-form-style mb-20">
                                <input 
                                    name="email"
                                    placeholder="Email" 
                                    type="email"
                                    onChange={UpdateData}
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="rating-form-style form-submit">
                                <textarea 
                                    name="message" 
                                    placeholder="Message"
                                    onChange={UpdateData}
                                ></textarea>
                                <input type="submit" value="Submit" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default RattingFormWrapper;