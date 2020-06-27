import React, {useEffect, useState} from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'
import { FaHeart, FaHeartBroken } from 'react-icons/fa'
import { normalizeUnits } from 'moment';

function BlogWithComment(props) {
    const [liked, setLiked] = useState(false)
    const [disLiked, setDisLiked] = useState(false)

    const comments = props.post.comments.map(comment => <Comment comment={comment} key={comment._id}/>) 
    const commentNumber = props.post.comments.length

    useEffect(() => {
        console.log('change to likes')
    }, [setLiked, setDisLiked])

    const handleLike = () => {
        setLiked(!liked)
        const num = (liked ? -1 : 1) + props.post.likes 

        fetch(`/api/posts/${props.post._id}/likes`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                "likes": num,
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
        })
    }

    const handleDisLike = () => {
        setDisLiked(!disLiked) 
        const num = (disLiked ? -1 : 1) + props.post.dislikes
 
        fetch(`/api/posts/${props.post._id}/dislikes`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                "dislikes": num
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
        })

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
