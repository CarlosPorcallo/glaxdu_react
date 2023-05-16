import React from 'react';
import {caption, slides} from '../../../config/events';

// layouts
import SliderEvents from '../../slider/sliderevents';

const EventArea = () => {
    return (
        <div className="event-area bg-img default-overlay pt-130 pb-130" style={{backgroundImage: "../../../assets/img/bg/bg-3.jpg"}}>
            <div className="container">
                <div className="section-title mb-75">
                    <h2><span>Our</span> Event</h2>
                    <p>{caption}</p>
                </div>
                
                <SliderEvents
                    slides={slides}
                />
            </div>
        </div>
    );
}
 
export default EventArea;