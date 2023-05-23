import {React, Fragment} from 'react';
import {useParams} from 'react-router';

// middleware
import {getEvent} from '../../../middleware/getters/events';

// layouts
import Header from '../../../layouts/header';
import EventGridDetail from '../../../layouts/event/eventgriddetail';
import EventDetailsLayout from '../../../layouts/event/eventdetails';
import Footer from '../../../layouts/footer';

const EventDetails = () => {
    const { id } = useParams();
    // obteniendo el detalle del evento
    const event = getEvent(id);
    return (
        <Fragment>
            <Header />
            <EventGridDetail />
            <EventDetailsLayout event={event} />
            <Footer />
        </Fragment>
    );
}
 
export default EventDetails;