import React from 'react';
import {AppContext} from '../Context/AppContext'

function BlogListItem(props) {
    return(
        <tr>
            <td>{props.title}</td>
            <td>{props.date}</td>
            <td>{props.comments.length}</td>
        </tr>
       
    )
}

export default BlogListItem