import React from 'react';

const SlideGallery = ({slide}) => {
    const img = require("../../../assets/img/event/"+slide.src);
    return (<img src={img} alt={slide.alt} />);
}
 
export default SlideGallery;