import React from 'react';
import {Link} from 'react-router-dom'

function Comment(props) {
    const deleteComment = () => {
        const ok = window.confirm('Are you sure you want to delete this comment?')
        if(ok) {
            fetch(`https://blog-api-072020.herokuapp.com/api/posts/${props.post._id}/comments/${props.id}`, {
                method: 'DELETE',
            }).then(res => res.json()).then(data => console.log(data))
        } else {
            return 
        }
    }

    return(
        <React.Fragment>
             <tr>
                <td>{props.text}
                    <span>
                        <p><Link to={`/admin/posts/${props.post._id}/comments/${props.id}/edit`}>Edit</Link></p> | <p onClick={deleteComment}>Delete</p>
                    </span>
                </td>
                <td>{props.name}</td>
                <td>{props.post.title}</td>
            </tr>
        </React.Fragment>
           
    )
}

export default Comment