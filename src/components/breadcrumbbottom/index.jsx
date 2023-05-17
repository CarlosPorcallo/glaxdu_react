import React from 'react';
import { Link } from 'react-router-dom';

const BreadcrumBottom = ({home, current_page}) => {
    return (
        <div className="breadcrumb-bottom">
            <div className="container">
                <ul>
                    <li>
                        <Link to={home.href}>{home.name}</Link>
                        <span><i className="fa fa-angle-double-right"></i> {current_page}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default BreadcrumBottom;