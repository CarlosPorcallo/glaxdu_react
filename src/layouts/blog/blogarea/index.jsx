import {React, useContext, useState} from 'react';
import {page_size_home} from '../../../config/blog';

// context
import {PaginatorContext} from '../../../middleware/context/paginator';

// components
import Card from '../../../components/blog/card';
import Paginator from '../../../components/paginator';

const BlogArea = ({title, caption, posts}) => {
    const {currentPage} = useContext(PaginatorContext);
    const [blogPosts, setBlogPosts] = useState(posts);
    let currentPosts = [];
    // total de posts
    let page_total = 0;
    // se define el indice inicial y final en la primer carga
    let indexOfLastPost = 0;
    let indexOfFirstPost = 0;
    
    // se calcula el total de páginas
    page_total = Math.ceil(posts.length/page_size_home);
    if (posts.length%page_size_home !== 0 && posts.length>page_size_home) {
        page_total++;
    }
        
    // se define el indice inicial y final en cada carga
    indexOfLastPost = currentPage * page_size_home;
    indexOfFirstPost = indexOfLastPost - page_size_home;

    // se define el bloque de posts a mostrar en la página actual
    currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

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