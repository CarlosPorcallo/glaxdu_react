import {React, Fragment} from 'react';
import {slides} from '../../config/home';

// layouts
import Header from '../../layouts/header';
import Slider from '../../components/slider/home';
import ChoseUs from '../../layouts/chose/cards';
import AboutUs from '../../layouts/about/aboutus';
import CourseArea from '../../layouts/course/coursearea';
import AchievementArea from '../../layouts/achievement/achievementarea';
import TeacherArea from '../../layouts/teacher/teacherarea';
import EventArea from '../../layouts/event/eventarea';
import BlogArea from '../../layouts/blog/blogarea';
import Footer from '../../layouts/footer';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Slider slides={slides} />
            <ChoseUs />
            <AboutUs />
            <CourseArea />
            <TeacherArea />
            <EventArea />
            <BlogArea title={true} />
            <Footer />
        </Fragment>
    );
}
 
export default Home;