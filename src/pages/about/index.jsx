import {React, Fragment} from 'react';

import Header from '../../layouts/header';
import AboutUs2Grid from '../../layouts/about/aboutusgrid';
import ChooseArea from '../../layouts/chose/choosearea';
import Video from '../../components/video';
import TeacherArea from '../../layouts/teacher/teacherarea';
import AchievementArea from '../../layouts/achievement/achievementarea';
import Footer from '../../layouts/footer';

const About = () => {
    return (
        <Fragment>
            <Header />
            <AboutUs2Grid />
            <ChooseArea />
            <Video />
            <TeacherArea />
            <Footer />
        </Fragment>
    );
}
 
export default About;