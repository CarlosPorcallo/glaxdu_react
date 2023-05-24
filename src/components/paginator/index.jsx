import {React, useContext} from 'react';
import {PaginatorContext} from '../../middleware/context/paginator';

const Paginator = ({page_total}) => {
    const {currentPage, setPage, nextPage, prevPage} = useContext(PaginatorContext);
    const pageNumbers = [];

    for (let i = 1; i < page_total; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pro-pagination-style text-center mt-25">
            <ul>
                {currentPage > 1 ? (
                    <li>
                        <a 
                            className="prev" 
                            onClick={prevPage}
                        >
                            <i className="fa fa-angle-double-left"></i>
                        </a>
                    </li>
                    ) : null
                }
                {pageNumbers.map((button, $index) => (
                    <li key={Math.random()}>
                        {currentPage === $index+1 ? (
                            <a className="active" onClick={() => (setPage($index+1))}>{$index+1}</a>
                        ) : (
                            <a className="" onClick={() => (setPage($index+1))}>{$index+1}</a>
                        )}
                    </li>
                ))}
                {currentPage < page_total-1 ? (
                    <li>
                        <a 
                            className="next" 
                            onClick={nextPage}
                        >
                            <i className="fa fa-angle-double-right"></i>
                        </a>
                    </li>
                ) : null 
                }
            </ul>
        </div>
    );
}
 
export default Paginator;