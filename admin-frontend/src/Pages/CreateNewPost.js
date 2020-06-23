import React from 'react';

function CreateNewPost() {
    return(
        <React.Fragment>
            <h1>Create a New Post</h1>
            <form>
                <input type="text" placeholder="Blog Title"></input>
                <textarea placeholder="Blog Text"></textarea>
                <button>Publish Post</button>
                <button>Save Without Publishing</button>
            </form>
        </React.Fragment>
    )
}

export default CreateNewPost