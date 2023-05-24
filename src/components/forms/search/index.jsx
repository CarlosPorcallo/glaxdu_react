import React from 'react';

const Search = () => {
    return (
        <div className="sidebar-search mb-40">
            <div className="sidebar-title mb-40">
                <h4>Search</h4>
            </div>
            <form>
                <input type="text" placeholder="Search" />
                <button><i className="fa fa-search"></i></button>
            </form>
        </div>
    );
}
 
export default Search;