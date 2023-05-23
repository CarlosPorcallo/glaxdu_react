import React from 'react';

const Booking = () => {
    return (
        <form>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <input placeholder="Name" type="text" />
                </div>
                <div className="col-lg-6 col-md-6">
                    <input placeholder="Email" type="email" />
                </div>
                <div className="col-lg-6 col-md-6">
                    <input name="name" placeholder="Date" type="text" />
                </div>
                <div className="col-lg-6 col-md-6">
                    <input placeholder="Time" type="text" />
                </div>
                <div className="col-lg-12">
                    <textarea placeholder="Message"></textarea>
                    <button className="seat-book-btn" type="submit">BOOK NOW</button>
                </div>
            </div>
        </form>
    );
}
 
export default Booking;