import React from 'react';

import BlogListItem from './BlogList'

function BlogTable(props) {
    const posts = props.posts.length > 1 ? props.posts.map(post => 
        <BlogListItem 
            key={post._id} 
            title={post.title} 
            date={post.date} 
            comments={post.comments}/>
    ) : null
    
    return(
        <table>
            <thead>
                <th>Title</th>
                <th>Date Created</th> 
                <th>Comments</th>
            </thead>
            {posts}
        </table>
    )
}

export default BlogTable