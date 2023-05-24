import React from 'react';

const About = ({about}) => {
    const img = require('../../../assets/img/icon-img/'+about.img.src);
    return (
        <div className="col-lg-6 col-md-6">
            <div className="single-about-chose-us mb-95">
                <div className="about-choose-img">
                    <img src={img} alt={about.img.alt} />
                </div>
                <div className={about.className}>
                    <h3>{about.heading}</h3>
                    {about.paragraphs.map((p) => (
                        <p>{p}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default About;