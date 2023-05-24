import {React, useState, useContext} from 'react';
import {page_size} from '../../../config/blog';

// context
import {PaginatorContext} from '../../../middleware/context/paginator';

// components
import Card from '../../../components/blog/card';
import Paginator from '../../../components/paginator';

// layouts
import Sidebar from '../../sidebar';

const BlogArea2 = ({posts}) => {
    const {currentPage} = useContext(PaginatorContext);
    const [blogPosts, setBlogPosts] = useState(posts);
    let currentPosts = [];
    // total de posts
    let page_total = 0;
    // se define el indice inicial y final en la primer carga
    let indexOfLastPost = 0;
    let indexOfFirstPost = 0;
    
    // se calcula el total de páginas
    page_total = Math.ceil(posts.length/page_size);
    if (posts.length%page_size !== 0 && posts.length>page_size) {
        page_total++;
    }
        
    // se define el indice inicial y final en cada carga
    indexOfLastPost = currentPage * page_size;
    indexOfFirstPost = indexOfLastPost - page_size;

    // se define el bloque de posts a mostrar en la página actual
    currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

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