import React, {createContext, useState, useRef} from 'react';

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
    //const [relatedCourses, setRelatedCourses] = useState([]);
    const [dataCourse, setCourse] = useState({});
    const course = useRef({});
    const relatedCourses = useRef([]);

    const setDataCourse = (data) => { 
        course.current = data;
        setCourse(data);
    };

    const setDataRelatedCourse = (data) => {
        relatedCourses.current = data;
    };

    return (
        <CourseContext.Provider
            value={{
                course,
                relatedCourses,
                setDataCourse,
                setDataRelatedCourse
            }}
        >
            {children}
        </CourseContext.Provider>
    );
};

export { CourseContext, CourseProvider }