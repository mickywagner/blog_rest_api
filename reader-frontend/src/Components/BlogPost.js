import React, { useContext } from 'react';
import { appContext, AppContext } from '../Context/Context'

import { Link } from 'react-router-dom'

function BlogPost({post}) {
    return(
        <div className='blog-post'>
            
            <h1>{post.title}</h1>
            
            <div className='blog-post-body'>
                <p className="author">Posted by {post.author.username} at {post.timestamp}</p>
                <p>{post.text}</p>
            </div>

            <Link to={`/blog/${post._id}`}>
                <button>Read More</button>
            </Link>
            
        </div>
    )
}

export default BlogPost