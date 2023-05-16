import React from 'react';

// components
import Search from '../../components/forms/search';
import AboutUsSidebar from '../about/aboutussidebar';
import RecentPostSidebar from '../blog/recentpostssidebar';

const Sidebar = () => {
    return (
        <div class="sidebar-style">
            <Search />
            <AboutUsSidebar />
            <RecentPostSidebar />

            <div class="sidebar-category mb-40">
                <div class="sidebar-title mb-40">
                    <h4>Course Category</h4>
                </div>
                <div class="category-list">
                    <ul>
                        <li><a href="#">MBA <span>04</span></a></li>
                        <li><a href="#">Graduate <span>08</span></a></li>
                        <li><a href="#">Under Graduate <span>04</span></a></li>
                        <li><a href="#">BBA <span>06</span></a></li>
                        <li><a href="#">Engineering <span>04</span></a></li>
                    </ul>
                </div>
            </div>
            <div class="sidebar-recent-course-wrap mb-40">
                <div class="sidebar-title mb-40">
                    <h4>Recent Courses</h4>
                </div>
                <div class="sidebar-recent-course">
                    <div class="sin-sidebar-recent-course">
                        <div class="sidebar-recent-course-img">
                            <a href="#"><img src="../assets/img/blog/recent-post-1.jpg" alt="" /></a>
                        </div>
                        <div class="sidebar-recent-course-content">
                            <h4><a href="#">Course Title</a></h4>
                            <ul>
                                <li>Credits : 125</li>
                                <li class="duration-color">Duration : 4yrs</li>
                            </ul>
                            <p>Datat non proident qui offici.hafw adec qart.</p>
                        </div>
                    </div>
                    <div class="sin-sidebar-recent-course">
                        <div class="sidebar-recent-course-img">
                            <a href="#"><img src="../assets/img/blog/recent-post-2.jpg" alt="" /></a>
                        </div>
                        <div class="sidebar-recent-course-content">
                            <h4><a href="#">Course Title</a></h4>
                            <ul>
                                <li>Credits : 125</li>
                                <li class="duration-color">Duration : 4yrs</li>
                            </ul>
                            <p>Datat non proident qui offici.hafw adec qart.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidebar-tag-wrap">
                <div class="sidebar-title mb-40">
                    <h4>Tag</h4>
                </div>
                <div class="sidebar-tag">
                    <ul>
                        <li><a href="#">Loremsite</a></li>
                        <li><a href="#">Loreipsum</a></li>
                        <li><a href="#">Dolar</a></li>
                        <li><a href="#">Site ament dollar</a></li>
                        <li><a href="#">Loremsite</a></li>
                        <li><a href="#">Dummy Text</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Sidebar;