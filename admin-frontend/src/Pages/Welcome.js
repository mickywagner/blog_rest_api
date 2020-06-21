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
            <nav>
                <a>Create a New Post</a>
                <a>View All Posts</a>
                <a>Comments</a>
                <a>Log Out</a>
            </nav>
            <div className="content">
                <h1>Welcome To Your Blog Dashboard</h1>
            </div>
            
        </div>
    )
}

export default Welcome