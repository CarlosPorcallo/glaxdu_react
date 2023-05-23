import React from 'react';

const DescriptionDate = ({day, month, hour, place}) => {
    return (
        <div className="description-date-time">
            <div className="description-date">
                <span className="event-date">{day}</span>
                <span>{month}</span>
            </div>
            <div className="description-meta-wrap">
                <div className="description-meta">
                    <i className="fa fa-location-arrow"></i>
                    <span>{place}</span>
                </div>
                <div className="description-meta">
                    <i className="fa fa-clock-o"></i>
                    <span>{hour}</span>
                </div>
            </div>
        </div>
    );
}
 
export default DescriptionDate;