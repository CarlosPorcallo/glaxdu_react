import React from 'react';

const BreadcrumbTop = ({heading, caption}) => {
    return (
        <div className="breadcrumb-top default-overlay bg-img breadcrumb-overly-2 pt-100 pb-95">
            <div className="container">
                <h2>{heading}</h2>
                <p>{caption}</p>
            </div>
        </div>
    );
}
 
export default BreadcrumbTop;