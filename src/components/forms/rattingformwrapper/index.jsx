import React from 'react';

const RattingFormWrapper = () => {
    return (
        <div className="ratting-form-wrapper">
            <h3>Add a Review</h3>
            <div className="ratting-form">
                <form>
                    <div className="star-box">
                        <span>Your rating:</span>
                        <div className="ratting-star">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="rating-form-style mb-20">
                                <input placeholder="Name" type="text" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="rating-form-style mb-20">
                                <input placeholder="Email" type="email" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="rating-form-style form-submit">
                                <textarea name="Your Review" placeholder="Message"></textarea>
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