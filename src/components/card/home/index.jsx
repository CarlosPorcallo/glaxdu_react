import React from 'react';

const Card = ({className, icon, heading, paragraphs}) => {
    const img = require("../../../assets/img/icon-img/"+icon);
    return (
        <div className={className}>
            <div className="choose-img">
                <img className="animated" src={img} alt="" />
            </div>
            <div className="choose-content">
                <h3>{heading}</h3>
                {paragraphs.map((p) => (
                    <p key={Math.random()}>{p}</p>
                ))}
            </div>
        </div>
    );
}
 
export default Card;