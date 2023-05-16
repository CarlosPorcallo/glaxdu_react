import React from 'react';

// components
import HeaderGrid from '../../../components/headergrid';

const AboutUsGrid = () => {
    const current_page = "About Page"
    const heading = "About Us";
    const caption = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore .";
    const home = {
        "href": "/home",
        "name": "Home"
    };
    
    return (
        <HeaderGrid 
            heading={heading}
            caption={caption}
            current_page={current_page}
            home={home}
        />
    );
}
 
export default AboutUsGrid;