import React, {useContext} from 'react';
import {AppContext} from '../Context/AppContext'

function Welcome() {
    const {allPosts, setAllPosts, getAllPosts} = useContext(AppContext)

    return(
        <div className="main">
            <h1>Welcome To Your Blog Dashboard</h1>
            <ul>
                <li onClick={getAllPosts}>See user front-end</li>
                <li>Published posts</li>
                <li>Unpublished posts</li>
                <li>All comments</li>
                <li>Create a new post</li>
            </ul>

        
        </div>
    )
}

export default Welcome