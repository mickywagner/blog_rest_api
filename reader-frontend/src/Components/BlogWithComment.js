import React, { useContext } from 'react';

import { Link } from 'react-router-dom'

function BlogWithComment({post}) {
    return(
        <div className='blog-post'>
            
            <h1>{post.title}</h1>
            
            <div className='blog-post-body'>
                <p className="author">Posted by {post.author.username} at {post.timestamp}</p>
                <p>{post.text}</p>
            </div>

            <div className='blog-comments'>
                <p>{post.comments}</p>
            </div>

            
        </div>
    )
}

export default BlogWithComment