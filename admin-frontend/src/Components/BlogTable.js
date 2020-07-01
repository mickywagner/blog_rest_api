import React from 'react';

import BlogListItem from './BlogList'

function BlogTable(props) {
    const posts = props.posts.length > 1 ? props.posts.map(post => 
        <BlogListItem 
            key={post._id} 
            title={post.title} 
            date={post.date} 
            comments={post.comments}
            likes={post.likes}
            dislikes={post.dislikes}
            id={post._id}
        />
    ) : <p>No blog posts found</p>
    
    return(
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Date Created</th> 
                    <th>Comments</th>
                    <th>Likes</th>
                    <th>Dislikes</th>
                </tr>
            </thead>
            <tbody>
                {posts}
            </tbody>
        </table>
    )
}

export default BlogTable