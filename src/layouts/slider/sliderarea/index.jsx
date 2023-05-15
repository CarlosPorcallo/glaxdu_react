import React from 'react';
import Slider from "react-slick";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const SliderArea = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="slider-area">
            <Slider {...settings}>
                <div className="single-slider slider-height-1 bg-img">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-7 col-12 col-sm-12">
                                <div className="slider-content slider-animated-1 pt-230">
                                    <h1 className="animated">MakeYour Own World 1</h1>
                                    <p className="animated">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                                    <div className="slider-btn">
                                        <Link 
                                            to="/about"
                                            className="animated default-btn btn-green-color"
                                        >
                                            ABOUT US
                                        </Link>
                                        <a className="animated default-btn btn-white-color" href="contact.html">CONTACT US</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-single-img slider-animated-1">
                            <img className="animated" src="../../../assets/img/slider/single-slide-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
 
export default SliderArea;