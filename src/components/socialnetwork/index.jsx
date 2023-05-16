import React from 'react';
import {social} from '../../config/social';

const SocialNetwork = () => {
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
                    <ul>
                        {social.map((sn) => (
                            <li><a className={sn.class} href={sn.href}><i className={sn.icon}></i></a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default SocialNetwork;