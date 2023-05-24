import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo/logo.png';
import './index.css';

// context
import {HeaderFooterContext} from '../../middleware/context/headerfooter';

// components
import NavMenu from '../../components/navmenu';

const Header = () => {
    const {email_contact, phone, paths, header_img} = useContext(HeaderFooterContext);
    return (
        <header className="header-area">
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
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/login">Register</Link></li>
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
        </header>
    );
}
 
export default Header;