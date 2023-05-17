import React from 'react';
import { Link } from 'react-router-dom';

const SocialNetwork = ({social}) => {
    return (
        <ul>
            {social.map((sn) => (
                <li key={Math.random()}>
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