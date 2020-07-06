import React, { useContext } from 'react';
import BlogForm from '../Components/BlogForm'
import {useHistory} from 'react-router-dom'
import { AppContext } from '../Context/AppContext';

function CreateNewPost() {
    let history = useHistory()
    const {getAllPosts} = useContext(AppContext)

    const submitBlog = (e) => {
        e.preventDefault()
        const {title, content, publish} = e.target

        fetch(`https://blog-api-072020.herokuapp.com/api/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                "title": title.value,
                "text": content.value,
                "isPublished": publish.checked
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            history.push('/admin/posts')
            getAllPosts()
        })
    }

    return(
        <React.Fragment>
            <h1>Create a New Post</h1>
            <div className="editor">
                <BlogForm submitMethod={submitBlog}/>
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