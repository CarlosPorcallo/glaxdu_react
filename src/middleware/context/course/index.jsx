import React, {createContext, useState, useRef} from 'react';

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
    const [dataCourse, setCourse] = useState({});
    const [replyComment, setReplyComment] = useState(false);
    const course = useRef({});
    const relatedCourses = useRef([]);
    const parentCourse = useRef(0);
    const lastIndexReview = useRef(0);
    const lastIndexReply = useRef(0);

    const setDataCourse = data => { 
        course.current = data;
        setCourse(course.current);
    };

    const setDataRelatedCourse = data => {
        relatedCourses.current = data;
    };

    const toggleReplyComment = id => {
        setReplyComment(!replyComment);
        parentCourse.current = id;
    };

    const setLastIndexReview = index => {
        lastIndexReview.current = index;
    };

    const setlastIndexReply = index => {
        lastIndexReply.current = index;
    };

    return (
        <CourseContext.Provider
            value={{
                course,
                relatedCourses,
                parentCourse,
                replyComment,
                lastIndexReview,
                lastIndexReply,
                setDataCourse,
                setDataRelatedCourse,
                toggleReplyComment,
                setLastIndexReview,
                setlastIndexReply
            }}
        >
            {children}
        </CourseContext.Provider>
    );
};

export { CourseContext, CourseProvider }