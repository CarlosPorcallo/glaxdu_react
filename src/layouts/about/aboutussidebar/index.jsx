import React from 'react';
import {social} from '../../../config/social';
import {about1, about_banner} from '../../../config/about'; 

// components
import SocialNetwork from '../../../components/socialnetwork';

const AboutUsSidebar = () => {
    const img = require("../../../assets/img/banner/"+about_banner);
    return (
        <div class="sidebar-about mb-40">
            <div class="sidebar-title mb-15">
                <h4>About Us</h4>
            </div>

            {about1.map((p) => (
                <p key={Math.random()}>{p}<br /><br /></p>
            ))}
            <a href={about_banner.href}><img src={img} alt={about_banner.alt} /></a>
            <div class="sidebar-social">
                <SocialNetwork 
                    social={social}
                />
            </div>
        </div>
    );
}
 
export default AboutUsSidebar;