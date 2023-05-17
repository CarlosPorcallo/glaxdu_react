import React from 'react';
import { Link } from 'react-router-dom';

const CourseCategoryCard = ({card}) => {
    return (
        <li><Link to={card.href}>{card.category} <span>{card.count}</span></Link></li>
    );
}
 
export default CourseCategoryCard;