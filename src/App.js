import {React, Fragment} from 'react';
import {Helmet} from 'react-helmet';
import './assets/css/App.css';

// layouts 
import Header from './layouts/sections/header';
import Footer from './layouts/sections/footer';

import SliderArea from './layouts/partials/sliderarea';
import ChoseUs from './layouts/partials/choseus';
import AboutUs from './layouts/partials/aboutus';
import CourseArea from './layouts/partials/coursearea';
import AchievementArea from './layouts/partials/achievementarea';
import RegisterArea from './layouts/partials/registerarea';
import TeacherArea from './layouts/partials/teacherarea';
import EventArea from './layouts/partials/eventarea';
import BlogArea from './layouts/partials/blogarea';

function App() {
  return (
    <Fragment>  
      <Header />
      <SliderArea />
      <ChoseUs />
      <AboutUs />
      <CourseArea />
      <TeacherArea />
      <EventArea />
      <BlogArea />
      <RegisterArea />
      <Footer />

      <Helmet>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
        <script src="assets/js/popper.min.js" type="text/javascript" />
        <script src="assets/js/bootstrap.min.js" type="text/javascript" />
        <script src="assets/js/plugins.js" type="text/javascript" />
      </Helmet>
    </Fragment>
  );
}

export default App;
