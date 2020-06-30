import React, {useState} from 'react';

function BlogForm(props) {
    const [title, setTitle] = useState(props.post.title)
    const [text, setText] = useState(props.post.text)
    const [isPublished, setIsPublished] = useState(props.post.isPublished)

    return(
        <form id="blogform" onSubmit={props.submitMethod}>
            <input type="text" id="title" placeholder="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <textarea id="content" placeholder="Blog post text" value={text} onChange={(e) => {setText(e.target.value)}}></textarea>
            <label><input type='checkbox' id="publish" checked={isPublished} onChange={(e) =>{setIsPublished(e.target.checked)}}></input> Publish Post</label>
            <button>Save Post</button>
        </form>
    )
}

export default BlogForm

BlogForm.defaultProps = {
    post: {
        title: '',
        text: '',
        isPublished: false
    }
}