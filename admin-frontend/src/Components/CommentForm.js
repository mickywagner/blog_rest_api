import React, {useState} from 'react';
import {useHistory} from "react-router-dom"


function CommentForm(props) {
    const [name, setName] = useState(props.comment.name)
    const [text, setText] = useState(props.comment.text)

    const history = useHistory()

    const submitComment = (e) => {
        e.preventDefault()
        fetch(`https://blog-api-072020.herokuapp.com/api/posts/${props.comment.post._id}/comments/${props.comment._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "text": text
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            history.push('/admin/comments')
        })
    }

    return(
        <form>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}></input>
            <textarea value={text} id="text" onChange={(e) => setText(e.target.value)}></textarea>
            <button onClick={submitComment}>Save Comment</button>
        </form>
    )
}

export default CommentForm