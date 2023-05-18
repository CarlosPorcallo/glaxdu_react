import React from 'react';

const Brand = ({slide}) => {
    const img = require("../../../assets/img/brand-logo/"+slide.img.src);
    return (
        <div className="single-brand-logo owl-item"><a href={slide.href}><img src={img} alt={slide.img.alt} /></a></div>
    );
}
 
export default Brand;