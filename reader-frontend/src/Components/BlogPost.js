import React, { useContext } from 'react';
import { appContext, AppContext } from '../Context/Context'
import App from '../App';

function BlogPost({post}) {
    return(
        <div className='blog-post'>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
        </div>
    )
}

export default BlogPost