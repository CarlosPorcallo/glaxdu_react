import {React, Fragment} from 'react';

import Header from '../../layouts/header';
import SliderArea from '../../layouts/slider/sliderarea';
import ChoseUs from '../../layouts/chose/choseus';
import AboutUs from '../../layouts/about/aboutus';
import CourseArea from '../../layouts/course/coursearea';
import AchievementArea from '../../layouts/achievement/achievementarea';
import RegisterArea from '../../layouts/register/registerarea';
import TeacherArea from '../../layouts/teacher/teacherarea';
import EventArea from '../../layouts/event/eventarea';
import BlogArea from '../../layouts/blog/blogarea';
import Footer from '../../layouts/footer';

const Home = () => {
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
        </Fragment>
    );
}
 
export default Home;