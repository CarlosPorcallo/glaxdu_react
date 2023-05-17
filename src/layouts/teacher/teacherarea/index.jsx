import React from 'react';
import {caption, cards} from '../../../config/teacher';

// components
import Card from '../../../components/teacher/card';

const TeacherArea = () => {
    return (
        <div className="teacher-area pt-130 pb-100">
            <div className="container">
                <div className="section-title mb-75">
                    <h2>Best <span>Teacher</span></h2>
                    <p>{caption}</p>
                </div>
                <div className="custom-row">
                    {cards.map((slide) => (
                        <div
                            key={Math.random()}
                            class="custom-col-5"
                        >
                            <Card slide={slide} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default TeacherArea;