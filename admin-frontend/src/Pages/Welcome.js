import React, {useContext, useEffect} from 'react';
import {AppContext} from '../Context/AppContext'

function Welcome() {
    const {getAllPosts, getAllComments, allPosts, allComments} = useContext(AppContext)

    useEffect(() => {
        getAllPosts()
        getAllComments()
    }, [])

    const publishedPosts = allPosts.filter(post => post.isPublished)
    const unpublishedPosts = allPosts.filter(post => post.isPublished === false)

    return(
        <div className="main">
            <h1>Welcome To Your Blog Dashboard</h1>
            <ul>
                <li>See user front-end</li>
                <li>Published posts</li>
                <li>Unpublished posts</li>
                <li>All comments</li>
                <li>Create a new post</li>
            </ul>
        </div>
    )
}

export default Welcome