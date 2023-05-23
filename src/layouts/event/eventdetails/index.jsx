import React from 'react';
import {booking_caption} from '../../../config/events';

// layouts
import Sidebar from '../../sidebar';
import DescriptionDate from '../../../components/events/descriptiondate';
import SocialNetwork from '../../../components/socialnetwork';
import SlideGallery from '../../../components/slides/gallery';
import SliderGallery from '../../../components/slider/gallery';
import Booking from '../../../components/forms/booking';

const EventDetailsLayout = ({event}) => {
    const img_detail = require('../../../assets/img/event/'+event.img_detail.src);
    return (
        <div className="event-details-area pt-130">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <div className="event-left-wrap mr-40">
                            <div className="event-description">
                                <div className="description-date-social mb-45">
                                    <DescriptionDate 
                                        day={event.date.day}
                                        month={event.date.month}
                                        hour={event.hour}
                                        place={event.place}
                                    />

                                    <div className="description-social-wrap">
                                        <div className="description-social">
                                            <SocialNetwork social={event.social} />
                                        </div>
                                        <div className="description-btn">
                                            <a href="#"><i className="fa fa-share-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <img src={img_detail} alt={img_detail.alt} />
                                <h3>{event.heading}</h3>
                                {event.description.map((p) => (
                                    <p>{p}</p>
                                ))}
                                <div className="event-gallery text-center mt-40">
                                    <SliderGallery slides={event.gallery} />
                                    <h4>View Our Event Gallery</h4>
                                </div>
                                <div className="seat-book-wrap bg-img mt-80 ">
                                    <div className="seat-book-title text-center">
                                        <h3>Book Your Seat Now</h3>
                                        <p>{booking_caption}</p>
                                    </div>
                                    <div className="seat-book-form">
                                        <Booking />
                                    </div>
                                </div>
                                <div className="location-area mt-80">
                                    <div id="location"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EventDetailsLayout;