import {React, Fragment} from 'react';

// middleware
import {getSlides} from '../../middleware/getters/home';
import {getAbout, getWidthVideo, getHeightVideo, getVideoSrc} from '../../middleware/getters/about';
import {getCardsChose} from '../../middleware/getters/chose';
import {getCaptionCourses, getImgBackground, getCourses} from '../../middleware/getters/courses';
import {getCaptionTeacher, getCardsTeacher} from '../../middleware/getters/teacher';
import {getCaptionEvents, getSlidesEvents} from '../../middleware/getters/events';
import {getCaptionBlog, getPosts} from '../../middleware/getters/blog';

// context
import {PaginatorProvider} from '../../middleware/context/paginator';

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
    // about us
    const about = getAbout();
    const width = getWidthVideo();
    const height = getHeightVideo();
    const video_src = getVideoSrc();
    // chose us (elígenos)
    const cards_chose = getCardsChose();
    // cursos
    const caption_courses = getCaptionCourses();
    const img_background = getImgBackground();
    const courses = getCourses();
    // maestros
    const caption_teacher = getCaptionTeacher();
    const cards_teacher = getCardsTeacher();
    // eventos
    const caption_event = getCaptionEvents();
    const slides_events = getSlidesEvents();
    // blog
    const captionBlog = getCaptionBlog();
    const posts = getPosts(); 
    return (
        <Fragment>
            <Header />
            <Slider slides={slides} />
            <ChoseUs cards={cards_chose} />
            <AboutUs 
                about={about}
                width={width}
                height={height}
                video_src={video_src}
            />
            <CourseArea
                caption={caption_courses}
                courses={courses}
                img_background={img_background}
            />
            <TeacherArea 
                caption={caption_teacher}
                cards={cards_teacher}
            />
            <EventArea 
                caption={caption_event}
                slides={slides_events}
            />
            <PaginatorProvider>
                <BlogArea 
                    title={true}
                    caption={captionBlog}
                    posts={posts}
                />
            </PaginatorProvider>
            <Footer />
        </Fragment>
    );
}
 
export default Home;