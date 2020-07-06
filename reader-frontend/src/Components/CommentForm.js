import React from 'react';

function CommentForm(props) {

    function submitComment(e) {
        const {name, text} = e.target
    
        fetch(`https://blog-api-072020.herokuapp.com/api/posts/${props.postid}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "name": name.value,
                "text": text.value
            })
        }).then(res => res.json()).then(data => console.log(data))
    }
    
    return(
        <div className='form'>
            <form onSubmit={submitComment}>
                <label htmlFor="name">Name: </label>
                <input id="name" type="text" required></input>
                <label htmlFor="text">Comment: </label>
                <textarea id="text" required></textarea>
                <button>Post Comment</button>
            </form>
        </div>
    )

}

export default CommentForm