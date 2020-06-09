import React, { useContext } from 'react';
import { appContext, AppContext } from '../Context/Context'
import App from '../App';

function BlogPost({post}) {
    return(
        <div className='blog-post'>
            <a href={`/posts/${post._id}`}>
                <h1>{post.title}</h1>
            </a>
            <div className='blog-post-body'>
                <p className="author">Posted by {post.author.username} at {post.timestamp}</p>
                <p>{post.text}</p>
            </div> 
        </div>
    )
}

export default BlogPost