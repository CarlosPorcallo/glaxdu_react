import React from 'react';

const Gallery = ({pictures}) => {
    return (
        <div className="footer-gallery">
            <ul>
                {pictures.map((pic) => {
                    const img = require('../../../assets/img/gallery/'+pic.src);
                    return (
                        <li key={Math.random()}><a href="#"><img src={img} alt={pic.alt} /></a></li>
                    );
                })}
            </ul>
        </div>
    );
}
 
export default Gallery;