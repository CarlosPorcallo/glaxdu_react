import React from 'react';

// components
import SliderBranding from '../../../components/slider/branding';

const BrandLogoArea = ({brands}) => {
    return (
        <div className="brand-logo-area pb-130">
            <div className="container">
                <SliderBranding slides={brands} />
            </div>
        </div>
    );
}

export default BrandLogoArea;