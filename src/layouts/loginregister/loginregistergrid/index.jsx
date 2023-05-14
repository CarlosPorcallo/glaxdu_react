import React from 'react';

import HeaderGrid from '../../../components/headergrid';

const LoginRegisterGrid = () => {
    const current_page = "Login/Register";
    const heading = "Login/Register";
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
 
export default LoginRegisterGrid;