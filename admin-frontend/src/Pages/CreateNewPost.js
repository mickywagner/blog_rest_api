import React from 'react';
import App from '../Components/TinyMCE'

function CreateNewPost() {
    return(
        <React.Fragment>
            <h1>Create a New Post</h1>
            <div className="editor">
                <App
                    apiKey={process.env.TINY_API_KEY}
                    init={{ /* your other settings */ }}
                />
            </div>
            
        </React.Fragment>
    )
}

export default CreateNewPost