import React from 'react';
import {category_list} from '../../../config/courses';

// components
import CourseCategoryCard from '../../../components/card/coursecategory';

const CategorySideBar = () => { 
    return (
        <div class="sidebar-category mb-40">
            <div class="sidebar-title mb-40">
                <h4>Course Category</h4>
            </div>
            <div class="category-list">
                <ul>
                    {category_list.map((card) => (
                        <CourseCategoryCard 
                            key={Math.random()}
                            card={card}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
export default CategorySideBar;