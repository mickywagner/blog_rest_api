import React from 'react';

function Comment(props) {
    return(
        <React.Fragment>
             <tr>
                <td>{props.text}
                    <span>
                        <a>Edit</a> | <a>Delete</a>
                    </span>
                </td>
                <td>{props.name}</td>
                <td>{props.post}</td>
            </tr>
        </React.Fragment>
           
    )
}

export default Comment