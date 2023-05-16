import React from 'react';

const Card = ({slide}) => {
    return (
        <div className="single-teacher mb-30">
            <div className="teacher-img">
                <img src={slide.img.src} alt={slide.img.alt} />
            </div>
            <div className="teacher-content-visible">
                <h4>{slide.visible.name}</h4>
                <h5>{slide.visible.role}</h5>
            </div>
            <div className="teacher-content-wrap">
                <div className="teacher-content">
                    <h4>{slide.content.name}</h4>
                    <h5>{slide.content.role}</h5>
                    {slide.paragraphs.map((p) => (
                        <p>{p}</p>
                    ))}
                    <div className="teacher-social">
                        <ul>
                            {slide.social.map((social) => (
                                <li><a className={social.className} href={social.href}><i className={social.icon}></i></a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Card;