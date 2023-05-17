import React from 'react';

const Comment = () => {
    return (
        <form>
            <div class="row">
                <div class="col-lg-6">
                    <div class="leave-form">
                        <input placeholder="Name" type="text" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="leave-form">
                        <input placeholder="Email" type="email" />
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="leave-form leave-btn">
                        <textarea placeholder="Message"></textarea>
                        <input type="submit" value="POST YOUR COMMENT" />
                    </div>
                </div>
            </div>
        </form>
    );
}
 
export default Comment;