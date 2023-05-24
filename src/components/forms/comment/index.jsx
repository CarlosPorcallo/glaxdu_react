import React from 'react';

const Comment = () => {
    return (
        <form>
            <div className="row">
                <div className="col-lg-6">
                    <div className="leave-form">
                        <input placeholder="Name" type="text" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="leave-form">
                        <input placeholder="Email" type="email" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="leave-form leave-btn">
                        <textarea placeholder="Message"></textarea>
                        <input type="submit" value="POST YOUR COMMENT" />
                    </div>
                </div>
            </div>
        </form>
    );
}
 
export default Comment;