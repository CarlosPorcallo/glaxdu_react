import React, {createContext} from 'react';

// middleware
import {getEmailContact, getPhone, getPathsNavbar, getHeaderImg} from '../../getters/header';
import {getGallery} from '../../getters/footer';
import {getSocialNetworks} from '../../getters/social';
import {getCompany} from '../../getters/about';

const HeaderFooterContext = createContext();

const HeaderFooterProvider = ({ children }) => {
    // header
    const email_contact = getEmailContact();
    const phone = getPhone();
    const paths = getPathsNavbar();
    const header_img = getHeaderImg();
    // footer
    const date = new Date();
    const company = getCompany();
    const social = getSocialNetworks(); 
    const gallery = getGallery();
    return (
        <HeaderFooterContext.Provider
            value={{
                email_contact,
                phone,
                paths,
                header_img,
                date,
                company,
                social,
                gallery
            }}
        >
            {children}
        </HeaderFooterContext.Provider>
    )
};

export {HeaderFooterContext, HeaderFooterProvider}