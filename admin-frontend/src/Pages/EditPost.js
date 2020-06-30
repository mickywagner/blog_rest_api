import React, { useContext } from 'react';
import {AppContext} from '../Context/AppContext'
import {useHistory} from 'react-router-dom'

import BlogForm from '../Components/BlogForm'

function EditPost(props) {
    const {allPosts} = useContext(AppContext)
    const postID =props.match.params.postId

    let history = useHistory()

    const postToEdit = allPosts.find(post => post._id === postID)

    const updatePost = (e) => {
        e.preventDefault()
        const {title, content, publish} = e.target

        fetch(`/api/posts/${postID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "title": title.value,
                "text": content.value,
                "isPublished": publish.checked
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            history.push('/admin/posts')
        }   
        )

    }

    return(
        <React.Fragment>
            <h1>Edit Post</h1>
            <div className="editor">
                <BlogForm post={postToEdit} submitMethod={updatePost}/>
            </div>
            
        </React.Fragment>
    )
}

export default EditPost