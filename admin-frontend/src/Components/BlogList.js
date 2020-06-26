import React from 'react';
import {Link} from 'react-router-dom'

function BlogListItem(props) {
    const deleteBlog = () => {
        const ok = window.confirm('Are you sure you want to delete this post and all associated comments?')
        if(ok) {
            fetch(`/api/posts/${props.id}`, {
                method: 'DELETE'
            }).then(res => res.json()).then(data => { 
                console.log(data)
            })
        } else {
            return
        }
        
    }

    return(
        <tr onClick={() => console.log(props.id)}>
            <td>{props.title}
                <span>
                    <p><Link to={`/admin/posts/${props.id}/edit`}>Edit</Link></p> | <p onClick={deleteBlog}>Delete</p>
                </span>
            </td>
            <td>{props.date}</td>
            <td>{props.comments.length}</td>
            <td>{props.likes}</td>
            <td>{props.dislikes}</td>
        </tr>
       
    )
}

export default BlogListItem