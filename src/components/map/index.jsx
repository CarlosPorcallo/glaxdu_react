import React from 'react';
import { url, width, height } from '../../config/map';

const Map = () => {
    return (
        <div id="map">
            <iframe src={url} width={width} height={height} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}
 
export default Map