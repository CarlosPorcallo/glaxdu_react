import React from 'react';

// components
import SliderCourses from '../../../slider/courses';

const RelatedCourse = ({courses}) => {
    return (
        <div class="related-course pt-70">
            <div class="related-title mb-45">
                <h3>Related Blog</h3>
                <p>Hempor incididunt ut labore et dolore mm, itation ullamco laboris <br />nisi ut aliquip. </p>
            </div>

            <SliderCourses 
                slides={courses}
            />
        </div>
    );
}
 
export default RelatedCourse;