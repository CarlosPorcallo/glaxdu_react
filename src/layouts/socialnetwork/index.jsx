import React from 'react';
//import {social} from '../../config/social';

// components
import Social from '../../components/socialnetwork';

const SocialNetwork = ({social}) => {
    return (
        <div className="col-lg-8 col-md-12">
            <div className="footer-menu-social">
                <div className="footer-menu">
                    <ul>
                        <li><a href="#">Privecy & Policy</a></li>
                        <li><a href="#">Terms & Conditions of Use</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <Social 
                        social={social}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default SocialNetwork;