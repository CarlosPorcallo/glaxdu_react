import {React, Fragment} from 'react';

import Header from '../../../layouts/header';
import EventGridDetail from '../../../layouts/event/eventgriddetail';
import EventDetailsLayout from '../../../layouts/event/eventdetails';
import Footer from '../../../layouts/footer';

const EventDetails = () => {
    return (
        <Fragment>
            <Header />
            <EventGridDetail />
            <EventDetailsLayout />
            <Footer />
        </Fragment>
    );
}
 
export default EventDetails;