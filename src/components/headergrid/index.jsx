import React from 'react';

// components
import BreadcrumBottom from '../breadcrumbbottom';
import BreadcrumbTop from '../breadcrumbtop';

const HeaderGrid = ({heading, caption, current_page, home}) => {
    return (
        <div className="breadcrumb-area">
            <BreadcrumbTop 
                heading={heading}
                caption={caption}
            />
            <BreadcrumBottom 
                home={{
                    "href": home.href,
                    "name": home.name
                }}
                current_page={current_page}
            />
        </div>
    );
}
 
export default HeaderGrid;