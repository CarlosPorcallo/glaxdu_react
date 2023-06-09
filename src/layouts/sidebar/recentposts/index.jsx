import React from 'react';
import {posts, recents_limit} from '../../../config/blog';

// components
import SideCard from '../../../components/blog/sidecard';

const RecentPostSidebar = () => {
    return (
        <div className="sidebar-recent-post mb-35">
            <div className="sidebar-title mb-40">
                <h4>Recent Post</h4>
            </div>
            <div className="recent-post-wrap">
                {posts.slice(0, recents_limit).map((post) => (
                    <SideCard 
                        key={Math.random()}
                        post={post} 
                    />
                ))}
            </div>
        </div>
    );
}
 
export default RecentPostSidebar;