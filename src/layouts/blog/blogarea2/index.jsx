import React, {useContext, useState, useEffect, useRef} from 'react';
import {page_size, min_width, max_width} from '../../../config/blog';

// context
import {PaginatorContext} from '../../../middleware/context/paginator';

// components
import Card from '../../../components/blog/card';
import Paginator from '../../../components/paginator';

// layouts
import Sidebar from '../../sidebar';

// middleware
import {getWindowSize} from '../../../middleware/utils/window';

const BlogArea2 = ({posts}) => {
    const [window_size, setWindowSize] = useState(getWindowSize());
    const {currentPage} = useContext(PaginatorContext);
    const [blogPosts, setBlogPosts] = useState(posts);
    const pageSize = useRef(page_size);
    let currentPosts = [];
    // total de posts
    let page_total = 0;
    // se define el indice inicial y final en la primer carga
    let indexOfLastPost = 0;
    let indexOfFirstPost = 0;

    const setConfig = () => {
        if (window.innerWidth < min_width) {
            pageSize.current = 1;
        } else if (window.innerWidth >= min_width && window.innerWidth <= max_width) {
            pageSize.current = 2;
        } else {
            pageSize.current = page_size;
        }
    };
    
    const setPosts = () => {
        // se calcula el total de páginas
        page_total = Math.ceil(posts.length/pageSize.current);
        if (posts.length%pageSize.current !== 0 && posts.length>pageSize.current) {
            page_total++;
        }
            
        // se define el indice inicial y final en cada carga
        indexOfLastPost = currentPage * pageSize.current;
        indexOfFirstPost = indexOfLastPost - pageSize.current;
    
        // se define el bloque de posts a mostrar en la página actual
        currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
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
        <div className="event-area pt-130 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <div className="blog-all-wrap mr-40">
                            {currentPosts ? (
                                <div className="row">
                                    {currentPosts.map((feed) => (
                                        <div 
                                            key={Math.random()}
                                            className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                                        >
                                            <Card feed={feed} />
                                        </div>
                                    ))}
                                    <Paginator page_total={page_total} />
                                </div>
                            ) : (

                            <div className='row'></div>
                            )}
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BlogArea2;