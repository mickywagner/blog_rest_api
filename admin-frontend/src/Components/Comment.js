import React from 'react';

function Comment(props) {
    const deleteComment = () => {
        fetch(`/api/posts/${props.post._id}/comments/${props.id}`, {
            method: 'DELETE',
        }).then(res => res.json()).then(data => console.log(data))
        
    }

    return(
        <React.Fragment>
             <tr>
                <td>{props.text}
                    <span>
                        <p>Edit</p> | <p onClick={deleteComment}>Delete</p>
                    </span>
                </td>
                <td>{props.name}</td>
                <td>{props.post.title}</td>
            </tr>
        </React.Fragment>
           
    )
}

export default Comment