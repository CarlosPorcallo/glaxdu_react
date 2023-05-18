import {React, Fragment} from 'react';

// middleware
import {getSlides} from '../../middleware/home';
import {getCaptionCourses, getImgBackground, getCourses} from '../../middleware/courses';
import {getCaptionBlog, getPosts} from '../../middleware/blog';

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
    // slider principal
    const slides = getSlides();
    // cursos
    const captionCourses = getCaptionCourses();
    const img_background = getImgBackground();
    const courses = getCourses();
    // blog
    const captionBlog = getCaptionBlog();
    const posts = getPosts();
    return (
        <Fragment>
            <Header />
            <Slider slides={slides} />
            <ChoseUs />
            <AboutUs />
            <CourseArea
                caption={captionCourses}
                courses={courses}
                img_background={img_background}
            />
            <TeacherArea />
            <EventArea />
            <BlogArea 
                title={true}
                caption={captionBlog}
                posts={posts}
            />
            <Footer />
        </Fragment>
    );
}
 
export default Home;