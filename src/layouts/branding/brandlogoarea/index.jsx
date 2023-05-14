import React from 'react';

const BrandLogoArea = () => {
    const brands = [
        {
            "href": "/home",
            "src": "../assets/img/brand-logo/1.png",
            "alt": ""
        },
        {
            "href": "/home",
            "src": "../assets/img/brand-logo/2.png",
            "alt": ""
        },
        {
            "href": "/home",
            "src": "../assets/img/brand-logo/3.png",
            "alt": ""
        },
        {
            "href": "/home",
            "src": "../assets/img/brand-logo/4.png",
            "alt": ""
        },
        {
            "href": "/home",
            "src": "../assets/img/brand-logo/5.png",
            "alt": ""
        },
        {
            "href": "/home",
            "src": "../assets/img/brand-logo/6.png",
            "alt": ""
        }
    ];

    return (
        <div className="brand-logo-area pt-45 pb-130">
            <div className="container">
                <div className="brand-logo">
                    {
                        brands.map((brand, $index) =>
                            <div className="single-brand-logo" key={brand.href+$index}>
                                <a href={brand.href}><img src={brand.src} alt={brand.alt} /></a>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
 
export default BrandLogoArea;