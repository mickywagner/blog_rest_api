import React, {useState} from 'react';


function CommentForm(props) {
    const [name, setName] = useState(props.comment.name)
    const [text, setText] = useState(props.comment.text)

    const submitComment = (e) => {
        e.preventDefault()
        fetch(`/api/posts/${props.comment.post._id}/comments/${props.comment._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "text": text
            })
        }).then(res => res.json()).then(data => console.log(data))
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