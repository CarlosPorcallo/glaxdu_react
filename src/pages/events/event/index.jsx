import {React, Fragment} from 'react';

import Header from '../../../layouts/header';
import EventGrid from '../../../layouts/event/eventgrid';
import EventArea2 from '../../../layouts/event/eventarea2';
import Footer from '../../../layouts/footer';

const Event = () => {
    return (
        <Fragment>
            <Header />
            <EventGrid />
            <EventArea2 />
            <Footer />
        </Fragment>
    );
}
 
export default Event;