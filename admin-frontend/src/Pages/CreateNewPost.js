import React, {useState} from 'react';

import { Editor } from '@tinymce/tinymce-react';


function CreateNewPost() {
    const [content, setContent] = useState('')

    const submitBlog = (e) => {
        e.preventDefault()
        
    }

    const handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
        setContent(content)
    
    }

    return(
        <React.Fragment>
            <h1>Create a New Post</h1>
            <div className="editor">
                <form onSubmit={submitBlog}>
                    <input type="text" id="title" placeholder="Blog Title"></input>
                    <Editor
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
                    />
                    <button>Submit Post</button>
                </form>
            </div>
            
        </React.Fragment>
    )
}

export default CreateNewPost