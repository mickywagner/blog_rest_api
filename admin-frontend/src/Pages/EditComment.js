import React from 'react';

function EditComment() {
    return(
        <React.Fragment>
            <h1>Edit Comment</h1>
            <div className="editor">
                <Comment comment={commentToEdit} submitMethod={commentToEdit}/>
            </div>    
        </React.Fragment>
    )
}

export default EditComment