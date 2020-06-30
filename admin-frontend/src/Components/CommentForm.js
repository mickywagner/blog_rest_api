import React from 'react';

function CommentForm(props) {
    const submitComment = (e) => {
        e.preventDefault()
        console.log(`api/posts/${props.comment.post._id}/comments/${props.comment._id}`)
        // fetch(`api/posts/${props.comment.post._id}/comments/${comment._id}`, {
        //     method: 'PUT'
        // })
    }
    return(
        <form>
            <input type="text" value={props.comment.name}></input>
            <textarea value={props.comment.text}></textarea>
            <button onClick={submitComment}>Save Comment</button>
        </form>
    )
}

export default CommentForm