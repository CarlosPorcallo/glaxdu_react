import React, {useContext, useState, useEffect, useRef} from 'react';
import {card_limit, min_width, max_width} from '../../../config/teacher';

// context
import {PaginatorContext} from '../../../middleware/context/paginator';

// components
import Card from '../../../components/teacher/card';
import Paginator from '../../../components/paginator';

// middleware
import {getWindowSize} from '../../../middleware/utils/window';

const TeacherArea = ({caption, cards}) => {
    const [window_size, setWindowSize] = useState(getWindowSize());
    const {currentPage} = useContext(PaginatorContext);
    const [cardsTeachers, setBlogPosts] = useState(cards);
    const page_size = useRef(card_limit);
    let currentCards = [];
    // total de cards
    let page_total = 0;
    // se define el indice inicial y final en la primer carga
    let indexOfLastPost = 0;
    let indexOfFirstPost = 0;

    const setConfig = () => {
        if (window.innerWidth < min_width) {
            page_size.current = 1;
        } else if (window.innerWidth >= min_width && window.innerWidth <= max_width) {
            page_size.current = 2;
        } else {
            page_size.current = card_limit;
        }
    };
    
    const setPosts = () => {
        // se calcula el total de páginas
        page_total = Math.ceil(cards.length/page_size.current);
        if (cards.length%page_size.current !== 0 && cards.length>page_size.current) {
            page_total++;
        }
            
        // se define el indice inicial y final en cada carga
        indexOfLastPost = currentPage * page_size.current;
        indexOfFirstPost = indexOfLastPost - page_size.current;
    
        // se define el bloque de posts a mostrar en la página actual
        currentCards = cardsTeachers.slice(indexOfFirstPost, indexOfLastPost);
    };

    const handleWindowResize = () => { 
        setWindowSize(getWindowSize()); 
        setConfig();
        setPosts()
    };    

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }; 
    }, []);

    setConfig();
    setPosts();

    return (
        <div className="teacher-area pt-130 pb-100">
            <div className="container">
                <div className="section-title mb-75">
                    <h2>Best <span>Teacher</span></h2>
                    <p>{caption}</p>
                </div>
                <div className="custom-row">
                    {currentCards.map((slide) => (
                        <div
                            key={Math.random()}
                            className="custom-col-5 col-sm-12 col-lg-6 col-xl-4"
                        >
                            <Card slide={slide} />
                        </div>
                    ))}
                </div>
                <Paginator page_total={page_total} />
            </div>
        </div>
    );
}
 
export default TeacherArea;