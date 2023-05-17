import React from 'react';
import {tags} from '../../../config/sidebar';

// components
import Tag from '../../../components/tag';

const Tags = () => {
    return (
        <div class="sidebar-tag-wrap">
            <div class="sidebar-title mb-40">
                <h4>Tag</h4>
            </div>
            <div class="sidebar-tag">
                <ul>
                    {tags.map((tag) => (
                        <Tag tag={tag}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
export default Tags;