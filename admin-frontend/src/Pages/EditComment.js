import React, {useContext} from 'react';
import {AppContext} from '../Context/AppContext'

import CommentForm from '../Components/CommentForm'

function EditComment(props) {
    const {allComments} = useContext(AppContext)
    const commentId =props.match.params.commentId

    const commentToEdit = allComments.find(comment => comment._id === commentId)

    return(
        <React.Fragment>
            <h1>Edit Comment</h1>
            <div className="editor">
                <CommentForm comment={commentToEdit} />
            </div>    
        </React.Fragment>
    )
}

export default EditComment