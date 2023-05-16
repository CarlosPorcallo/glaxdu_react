import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const SocialNetwork = ({social}) => {
    return (
        <ul>
            {social.map((sn) => (
                <li>
                    <Link 
                        className={sn.class} 
                        to={sn.href}
                    ><i className={sn.icon}></i>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
 
export default SocialNetwork;