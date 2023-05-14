import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from '../../assets/img/logo/logo.png';
import './index.css';

const Header = () => {
    return (
        <header className="header-area">
            <div className="header-top bg-img">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 col-12 col-sm-8">
                            <div className="header-contact">
                                <ul>
                                    <li><i className="fa fa-phone"></i> +98 558 547 589</li>
                                    <li><i className="fa fa-envelope-o"></i><a href="https://www.youtube.com/watch?v=R1wwopVP7-A">education@email.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-12 col-sm-4">
                            <div className="login-register">
                                <ul>
                                    <li><a href="login-register.html">Login</a></li>
                                    <li><a href="login-register.html">Register</a></li>
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
                                        <ul>
                                            <li>
                                                <Link to="/home">HOME</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">ABOUT</Link>
                                            </li>
                                            <li><a href="#"> PAGES <i className="fa fa-angle-down"></i> </a>
                                                <ul className="submenu">
                                                    <li><Link to="/course">course page</Link></li>
                                                    <li><Link to="/course-details">course details</Link></li>
                                                    <li><Link to="/event">event page</Link></li>
                                                    <li><Link to="/event-details">event details</Link></li>
                                                    <li><Link to="/login-register">login / register</Link></li>
                                                </ul>
                                            </li>
                                            <li><a href="course.html"> COURSES / PROGRAMMES</a></li>
                                            <li><a href="blog.html"> BLOG </a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="blog-details.html">blog details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html"> CONTACT </a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu-area">
                        <div className="mobile-menu">
                            <nav id="mobile-menu-active">
                                <ul className="menu-overflow">
                                    <li><a href="index.html">HOME</a>
                                        <ul>
                                            <li><a href="index.html">home version 1</a></li>
                                            <li><a href="index-2.html">home version 2</a></li>
                                            <li><a href="index-3.html">home version 3</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about-us.html">About</a></li>
                                    <li><a href="shop.html">Shop</a>
                                        <ul>
                                            <li><a href="https://www.youtube.com/watch?v=R1wwopVP7-A">Categories 01</a>
                                                <ul>
                                                    <li><a href="shop.html">bag</a></li>
                                                    <li><a href="shop.html">Pen</a></li>
                                                    <li><a href="shop.html">Erasers</a></li>
                                                    <li><a href="shop.html">Glue sticks</a></li>
                                                    <li><a href="shop.html">Lunchbox </a></li>
                                                    <li><a href="shop.html">Pencil box </a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://www.youtube.com/watch?v=R1wwopVP7-A">Categories 02</a>
                                                <ul>
                                                    <li><a href="shop.html">bag</a></li>
                                                    <li><a href="shop.html">Pen</a></li>
                                                    <li><a href="shop.html">Erasers</a></li>
                                                    <li><a href="shop.html">Glue sticks</a></li>
                                                    <li><a href="shop.html">Lunchbox </a></li>
                                                    <li><a href="shop.html">Pencil box </a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://www.youtube.com/watch?v=R1wwopVP7-A">Categories 03</a>
                                                <ul>
                                                    <li><a href="shop.html">bag</a></li>
                                                    <li><a href="shop.html">Pen</a></li>
                                                    <li><a href="shop.html">Erasers</a></li>
                                                    <li><a href="shop.html">Glue sticks</a></li>
                                                    <li><a href="shop.html">Lunchbox </a></li>
                                                    <li><a href="shop.html">Pencil box </a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://www.youtube.com/watch?v=R1wwopVP7-A">Categories 04</a>
                                                <ul>
                                                    <li><a href="shop.html">bag</a></li>
                                                    <li><a href="shop.html">Pen</a></li>
                                                    <li><a href="shop.html">Erasers</a></li>
                                                    <li><a href="shop.html">Glue sticks</a></li>
                                                    <li><a href="shop.html">Lunchbox </a></li>
                                                    <li><a href="shop.html">Pencil box </a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="https://www.youtube.com/watch?v=R1wwopVP7-A">Pages</a>
                                        <ul>
                                            <li><a href="course.html">course page</a></li>
                                            <li><a href="event.html">event page</a></li>
                                            <li><a href="shop.html">shop page</a></li>
                                            <li><a href="course-details.html">course details</a></li>
                                            <li><a href="event-details.html">event details</a></li>
                                            <li><a href="single-product.html">single product</a></li>
                                            <li><a href="cart.html">cart page</a></li>
                                            <li><a href="checkout.html">checkout</a></li>
                                            <li><a href="wishlist.html">wishlist</a></li>
                                            <li><a href="login-register.html">login / register</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about-us.html">About us</a></li>
                                    <li><a href="blog.html">Blog</a>
                                        <ul>
                                            <li><a href="blog.html">blog</a></li>
                                            <li><a href="blog-details.html">blog details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;