import React from 'react';

const Events = ({slide}) => {
    return (
        <div className="single-event event-white-bg">
            <div className="event-img">
                <a href={slide.href}><img src={slide.img.src} alt={slide.img.alt} /></a>
                <div className="event-date-wrap">
                    <span className="event-date">{slide.date.day}</span>
                    <span>{slide.date.month}</span>
                </div>
            </div>
            <div className="event-content">
                <h3><a href={slide.href}>{slide.heading}</a></h3>
                {slide.paragraphs.map((p) => (
                    <p>{p}</p>
                ))}
                <div className="event-meta-wrap">
                    <div className="event-meta">
                        <i className="fa fa-location-arrow"></i>
                        <span>{slide.place}</span>
                    </div>
                    <div className="event-meta">
                        <i className="fa fa-clock-o"></i>
                        <span>{slide.hour}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Events;