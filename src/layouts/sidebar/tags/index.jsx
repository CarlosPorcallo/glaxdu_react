import React from 'react';
import {tags} from '../../../config/sidebar';

// components
import Tag from '../../../components/tag';

const Tags = () => {
    return (
        <div className="sidebar-tag-wrap">
            <div className="sidebar-title mb-40">
                <h4>Tag</h4>
            </div>
            <div className="sidebar-tag">
                <ul>
                    {tags.map((tag) => (
                        <Tag 
                            key={Math.random()}
                            tag={tag}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
export default Tags;