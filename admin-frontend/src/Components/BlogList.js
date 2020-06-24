import React from 'react';

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
                    <p>Edit</p> | <p onClick={deleteBlog}>Delete</p>
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