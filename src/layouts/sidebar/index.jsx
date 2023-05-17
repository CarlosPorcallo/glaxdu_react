import React from 'react';

// components
import Search from '../../components/forms/search';
import AboutUsSidebar from '../about/aboutussidebar';
import RecentPostSidebar from './recentposts';
import CategorySideBar from '../course/categorysidebar';
import RecentCoursesSidebar from './recentcourses';
import Tags from './tags';

const Sidebar = () => {
    return (
        <div class="sidebar-style">
            <Search />
            <AboutUsSidebar />
            <RecentPostSidebar />
            <RecentCoursesSidebar />
            <CategorySideBar />
            <Tags />
        </div>
    );
}
 
export default Sidebar;