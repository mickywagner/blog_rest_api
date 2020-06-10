import React from 'react';
import Comment from './Comment'

function BlogWithComment(props) {
    console.log(props)

    const comments = props.post.comments.map(comment => <Comment comment={comment}/>)
    
    return(
        <React.Fragment>
            <div className='blog-post-feature'>
                <div className="blog-body">
                    <p>{props.post.timestamp}</p>
                    <h1>{props.post.title}</h1>
                    <p>By: {props.post.author.username}</p> 
                    <p>{props.post.text}</p> 
                </div>
            </div>
            <div className="comments">
                {comments}
            </div>
        </React.Fragment>
        
    )
}

export default BlogWithComment