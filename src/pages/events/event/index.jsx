import {React, Fragment} from 'react';

import Header from '../../../layouts/header';
import EventGrid from '../../../layouts/event/eventgrid';
import EventArea from '../../../layouts/event/eventarea';
import Footer from '../../../layouts/footer';

const Event = () => {
    return (
        <Fragment>
            <Header />
            <EventGrid />
            <EventArea />
            <Footer />
        </Fragment>
    );
}
 
export default Event;