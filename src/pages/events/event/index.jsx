import {React, Fragment} from 'react';

// middleware
import {getCaptionEvents, getSlidesEvents} from '../../../middleware/getters/events';

// layouts
import Header from '../../../layouts/header';
import EventGrid from '../../../layouts/event/eventgrid';
import EventArea from '../../../layouts/event/eventarea';
import Footer from '../../../layouts/footer';


const Event = () => {
    // eventos
    const caption_event = getCaptionEvents();
    const slides_events = getSlidesEvents();
    return (
        <Fragment>
            <Header />
            <EventGrid />
            <EventArea 
                caption={caption_event}
                slides={slides_events}
            />
            <Footer />
        </Fragment>
    );
}
 
export default Event;