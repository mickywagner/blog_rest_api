import React, {useContext, useEffect} from 'react';
import {AppContext} from '../Context/AppContext'

import Comment from '../Components/Comment'

function AllComments() {
    const {getAllComments, allComments} = useContext(AppContext)
    
    useEffect(() => {
        getAllComments()
    }, [allComments])

    const comments = allComments.length < 1 ? <tr><td>No comments found</td></tr>: 
        allComments.map(comment => <Comment key={comment._id} id={comment._id} text={comment.text} name={comment.name} post={comment.post}/>)

    return(
        <div>
            <h2>
                Comments
            </h2>

            <div className="blog-list">
                <table>
                    <thead>
                        <tr>
                            <th>Comment</th>
                            <th>Posted By</th>
                            <th>Post</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments}
                    </tbody>
                    
                </table>
                
            </div>
            
            
        </div>
    )
}

export default AllComments