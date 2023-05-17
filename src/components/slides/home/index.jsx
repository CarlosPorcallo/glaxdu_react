import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({slide}) => {
    return (
        <div className="single-slider slider-height-1 bg-img">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-7 col-12 col-sm-12">
                        <div className="slider-content slider-animated-1 pt-230">
                            <h1 className="animated">{slide.heading}</h1>
                            {slide.paragraphs.map((p) => (
                                <p
                                    key={Math.random()} 
                                    className="animated"
                                >{p}</p>
                            ))}

                            <div className="slider-btn">
                                {slide.buttons.map((btn) => (
                                    <Link 
                                        key={Math.random()}
                                        to={btn.href}
                                        className={btn.className}
                                    >
                                        {btn.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-single-img slider-animated-1">
                    <img className="animated" src={slide.bg.src} alt={slide.bg.alt} />
                </div>
            </div>
        </div>
    );
}
 
export default Home;