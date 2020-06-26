import React, {useEffect, useState} from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'
import { FaHeart, FaHeartBroken } from 'react-icons/fa'

function BlogWithComment(props) {
    const [liked, setLiked] = useState(false)
    const [disLiked, setDisLiked] = useState(false)

    const comments = props.post.comments.map(comment => <Comment comment={comment} key={comment._id}/>) 
    const commentNumber = props.post.comments.length

    const handleLike = () => {
        setLiked(!liked)
        // make api call to add like if liked == true
        // else maek api call to remove like if like === false
    }

    const handleDisLike = () => {
        setDisLiked(!disLiked) 
        // make api call to add dislike if it's true
        // else make api call to subtract dislike
    }
 
    return(
        <React.Fragment>
            <div className='blog-post-feature'>
                <div className="blog-body">
                    <p>{props.post.date}</p>
                    <h1>{props.post.title}</h1>
                    <p>By: {props.post.author.username}</p> 
                    <p>{props.post.text}</p> 
                    <div className="likes">
                        <span><span onClick={handleLike}><FaHeart /> {props.post.likes}</span> <span onClick={handleDisLike}><FaHeartBroken /> {props.post.dislikes}</span> </span>
                    </div>
                </div>
                <div className="comments">
                    <h1>Leave a new comment: </h1>
                    <CommentForm postid={props.post._id}/>
                    <h1>{commentNumber === 1 ? `${commentNumber} Comment` : `${commentNumber} Comments`}: </h1>
                    {comments}
                    
                </div>
            </div>
        </React.Fragment>
        
    )
}

export default BlogWithComment
