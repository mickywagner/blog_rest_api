import React from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'

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
                <div className="comments">
                    <h1>Comments:</h1>
                    {comments}
                    <h1>Leave a new comment: </h1>
                    <CommentForm />
                </div>
            </div>
        </React.Fragment>
        
    )
}

export default BlogWithComment