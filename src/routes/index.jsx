import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Course from '../pages/courses/course';
import CourseDetails from '../pages/courses/coursedetails';
import Event from '../pages/events/event';
import EventDetails from '../pages/events/eventdetails';
import LoginRegister from '../pages/loginregister';

const Rout3r = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='*' element={<Home />}></Route>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/home' element={<Home />}></Route>
                <Route exact path='/about' element={<About />}></Route>
                <Route exact path='/course' element={<Course />}></Route>
                <Route exact path='/course-details' element={<CourseDetails />}></Route>
                <Route exact path='/event' element={<Event />}></Route>
                <Route exact path='/event-details' element={<EventDetails />}></Route>
                <Route exact path='/login-register' element={<LoginRegister />}></Route>
            </Routes>
        </Router>
    );
}
 
export default Rout3r;