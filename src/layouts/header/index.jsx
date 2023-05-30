import React, {useContext, useState, useEffect} from 'react';
import {show_register_btn, login_in_new_page} from '../../config/login';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo/logo.png';
import './index.css';

// context
import {HeaderFooterContext} from '../../middleware/context/headerfooter';

// components
import NavMenu from '../../components/navmenu';

// layouts
import FloatingForm from '../login/floatingform';

const Header = () => {
    const {email_contact, phone, paths, header_img} = useContext(HeaderFooterContext);
    const [showFloatingForm, setShowFloatingForm] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset=window.scrollY;
        if (offset > 140) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    }, []);

    return (
        <header className={scrolled ? "header-area sticky-navbar" : "header-area"}>
            <div className="header-top bg-img" style={{backgroundImage: header_img}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 col-12 col-sm-8">
                            <div className="header-contact">
                                <ul>
                                    <li><i className="fa fa-phone"></i> {phone}</li>
                                    <li><i className="fa fa-envelope-o"></i><a href={"mailto:"+email_contact}>{email_contact}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-12 col-sm-4">
                            <div className="login-register">
                                <ul>
                                    { login_in_new_page ? (
                                        <li><Link to="/login">Login</Link></li>
                                        ) : (
                                        <li><a onClick={() => {setShowFloatingForm(!showFloatingForm)}}>Login</a></li>
                                    )}
                                    { show_register_btn && login_in_new_page ? (
                                        <li><Link to="/login">Register</Link></li>
                                    ) : null }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom sticky-bar clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-6 col-4">
                            <div className="logo">
                                <Link to="/">
                                    <img alt="" src={logo} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-6 col-8">
                            <div className="menu-cart-wrap">
                                <div className="main-menu">
                                    <nav>
                                        <NavMenu
                                            paths={paths}
                                            className={"menu-overflow"}
                                        />
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu-area">
                        <div className="mobile-menu">
                            <nav id="mobile-menu-active">
                                <NavMenu 
                                    paths={paths}
                                />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {showFloatingForm ? (<FloatingForm />) : null }
        </header>
    );
}
 
export default Header;