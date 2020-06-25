import React from 'react';
import {Link} from 'react-router-dom'

function BlogListItem(props) {
    const deleteBlog = () => {
        fetch(`/api/posts/${props.id}`, {
            method: 'DELETE'
        }).then(res => res.json())
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