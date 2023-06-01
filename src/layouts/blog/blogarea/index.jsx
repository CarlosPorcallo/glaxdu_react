import React, {useContext, useState, useEffect, useRef} from 'react';
import {page_size_home, min_width, max_width} from '../../../config/blog';

// context
import {PaginatorContext} from '../../../middleware/context/paginator';

// components
import Card from '../../../components/blog/card';
import Paginator from '../../../components/paginator';

// middleware
import {getWindowSize} from '../../../middleware/utils/window';

const BlogArea = ({title, caption, posts}) => {
    const [window_size, setWindowSize] = useState(getWindowSize());
    const {currentPage} = useContext(PaginatorContext);
    const [blogPosts, setBlogPosts] = useState(posts);
    const page_size = useRef(page_size_home);
    let currentPosts = [];
    // total de posts
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
            page_size.current = page_size_home;
        }
    };
    
    const setPosts = () => {
        // se calcula el total de páginas
        page_total = Math.ceil(posts.length/page_size.current);
        if (posts.length%page_size.current !== 0 && posts.length>page_size.current) {
            page_total++;
        }
            
        // se define el indice inicial y final en cada carga
        indexOfLastPost = currentPage * page_size.current;
        indexOfFirstPost = indexOfLastPost - page_size.current;
    
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
        <div className="blog-area pt-130 pb-100">
            <div className="container">
                {title ? 
                    <div className="section-title mb-75">
                        <h2>Our <span>posts</span></h2>
                        <p>{caption}</p>
                    </div>
                : null
                }
                <div className="row">
                    {currentPosts.map((feed) => (
                        <div
                            key={Math.random()} 
                            className="col-lg-3 col-md-6"
                        >
                            <Card feed={feed} />
                        </div>
                    ))}
                    <Paginator page_total={page_total+1} />
                </div>
            </div>
        </div>
    );
}
 
export default BlogArea;