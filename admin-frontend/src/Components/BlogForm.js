import React from 'react';

function BlogForm(props) {
    const submitBlog = (e) => {
        e.preventDefault()
        const {title, content, publish} = e.target

        fetch(`/api/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                "title": title.value,
                "text": content.value,
                "isPublished": publish.checked
            })
        }).then(res => res.json()).then(data => console.log(data))
    }

    return(
        <form onSubmit={submitBlog}>
            <input type="text" id="title" placeholder="Blog Title"></input>
            <textarea id="content" placeholder="Blog post text"></textarea>
            <label><input type='checkbox' id="publish"></input> Publish Post</label>
            <button>Save Post</button>
        </form>
    )
}

export default BlogForm