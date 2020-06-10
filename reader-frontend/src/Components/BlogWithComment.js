import React from 'react';

function BlogWithComment(props) {
    console.log(props)

    
    return(
        <div className='blog-post-feature'>
            <p>{props.post.timestamp}</p>
            <h1>{props.post.title}</h1>
            <p>By: {props.post.author.username}</p>    
        </div>
    )
}

export default BlogWithComment