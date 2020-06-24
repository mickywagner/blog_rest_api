import React from 'react';
import {AppContext} from '../Context/AppContext'

function BlogListItem(props) {
    return(
        <tr>
            <td>{props.title}</td>
            <td>{props.date}</td>
            <td>{props.comments.length}</td>
            <td>{props.likes}</td>
            <td>{props.dislikes}</td>
        </tr>
       
    )
}

export default BlogListItem