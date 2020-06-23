import React, {useContext, useEffect} from 'react';
import {AppContext} from '../Context/AppContext'

import Comment from '../Components/Comment'

function AllComments() {
    const {getAllComments, allComments} = useContext(AppContext)
    
    useEffect(() => {
        getAllComments()
    })

    const comments = allComments.length < 1 ? null : 
        allComments.map(comment => <Comment key={comment._id} text={comment.text} name={comment.name} post={comment.post.title}/>)

    return(
        <div>
            <h2>
                Comments
            </h2>
            <div className="blog-list">
                <table>
                    <thead>
                        <th>Comment</th>
                        <th>Posted By</th>
                        <th>Post</th>
                    </thead>
                    {comments}
                </table>
                
            </div>
            
            
        </div>
    )
}

export default AllComments