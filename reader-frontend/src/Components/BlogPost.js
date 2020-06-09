import React, { useContext } from 'react';
import { appContext, AppContext } from '../Context/Context'
import App from '../App';

function BlogPost({post}) {
    return(
        <div className='blog-post'>
            <h1>{post.title}</h1>
            <div className='blog-post-body'>
                <author>Posted by {post.author.username} at {post.timestamp}</author>
                <p>{post.text}</p>
            </div> 
        </div>
    )
}

export default BlogPost