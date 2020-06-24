import React, {useState} from 'react';
// import { Editor } from '@tinymce/tinymce-react';

function CreateNewPost() {

    const submitBlog = (e) => {
        e.preventDefault()
        const {title, content, publish} = e.target

        fetch(`/api/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTU2M2M1YzY1ZjdmNjQ5NmJhZWIxMyIsInVzZXJuYW1lIjoiU2NhcmxldHQiLCJpYXQiOjE1OTI5NjA3NDQsImV4cCI6MTU5MzA0NzE0NH0.yW86EWszvpiOCglRlsKq6-Zo0_S7A0q17vIP79ik-cI'
            }, 
            body: JSON.stringify({
                "title": title.value,
                "text": content.value,
                "isPublished": publish.checked
            })
        }).then(res => res.json()).then(data => console.log(data))
    }

    return(
        <React.Fragment>
            <h1>Create a New Post</h1>
            <div className="editor">
                <form onSubmit={submitBlog}>
                    <input type="text" id="title" placeholder="Blog Title"></input>
                    <textarea id="content" placeholder="Blog post text"></textarea>
                    <label><input type='checkbox' id="publish"></input> Publish Post</label>
                    <button>Save Post</button>
                </form>
            </div>
            
        </React.Fragment>
    )
}

export default CreateNewPost


{/* <Editor
initialValue="<p>This is the initial content of the editor</p>"
init={{
height: 500,
menubar: false,
plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount'
],
toolbar:
    'undo redo | formatselect | bold italic backcolor | \
    alignleft aligncenter alignright alignjustify | \
    bullist numlist outdent indent | removeformat | help'
}}
onEditorChange={handleEditorChange}
value={content}
/> */}