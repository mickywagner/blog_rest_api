import React from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'

function BlogWithComment(props) {
    const comments = props.post.comments.map(comment => <Comment comment={comment} key={comment._id}/>) 
    const commentNumber = props.post.comments.length

    return(
        <React.Fragment>
            <div className='blog-post-feature'>
                <div className="blog-body">
                    <p>{props.post.date}</p>
                    <h1>{props.post.title}</h1>
                    <p>By: {props.post.author.username}</p> 
                    <p>{props.post.text}</p> 
                </div>
                <div className="comments">
                    <h1>{commentNumber === 1 ? `${commentNumber} Comment` : `${commentNumber} Comments`}: </h1>
                    {comments}
                    <h1>Leave a new comment: </h1>
                    <CommentForm postid={props.post._id}/>
                </div>
            </div>
        </React.Fragment>
        
    )
}

export default BlogWithComment