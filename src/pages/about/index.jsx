import {React, Fragment} from 'react';

// middleware
import {getEmailContact, getPhone, getPathsNavbar, getHeaderImg} from '../../middleware/getters/header';
import {getCaptionTeacher, getCardsTeacher} from '../../middleware/getters/teacher';
import {getAboutBanner2, getAboutCards, getBgImg, getCompany} from '../../middleware/getters/about';
import {getSocialNetworks} from '../../middleware/getters/social';

// layouts
import Header from '../../layouts/header';
import AboutUsGrid from '../../layouts/about/aboutusgrid';
import ChooseArea from '../../layouts/chose/choosearea';
import TeacherArea from '../../layouts/teacher/teacherarea';
import AchievementArea from '../../layouts/achievement/achievementarea';
import Footer from '../../layouts/footer';

const About = () => {
    // header
    const email_contact = getEmailContact();
    const phone = getPhone();
    const paths = getPathsNavbar();
    const header_img = getHeaderImg();
    // chose (elígenos)
    const about_cards = getAboutCards();
    const about_banner = getAboutBanner2();
    const bg_img = getBgImg();
    // maestros
    const caption_teacher = getCaptionTeacher();
    const cards_teacher = getCardsTeacher();
    // footer
    const company = getCompany();
    const social_networks = getSocialNetworks(); 
    return (
        <Fragment>
            <Header 
                email_contact={email_contact}
                phone={phone}
                paths={paths}
                header_img={header_img}
            />
            <AboutUsGrid />
            <ChooseArea 
                about_cards={about_cards}
                about_banner={about_banner}
                bg_img={bg_img}
            />
            <TeacherArea 
                caption={caption_teacher}
                cards={cards_teacher}
            />
            <Footer 
                company={company}
                social={social_networks}
            />
        </Fragment>
    );
}
 
export default About;