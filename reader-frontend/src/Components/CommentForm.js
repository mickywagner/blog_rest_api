import React from 'react';

function CommentForm() {
    return(
        <div className='form'>
            <form>
                <label for="name">Name: </label>
                <input id="name" type="text"></input>
                <label for="text">Comment: </label>
                <textarea id="text"></textarea>
                <button>Post Comment</button>
            </form>
        </div>
    )

}

export default CommentForm