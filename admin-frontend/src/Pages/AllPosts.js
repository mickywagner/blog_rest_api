import React, { useContext } from 'react';
import {AppContext} from '../Context/AppContext'



function AllPosts() {
    const {allPosts} = useContext(AppContext)
    
    const publishedPosts = allPosts.filter(post => post.isPublished)
    const unpublishedPosts = allPosts.filter(post => post.isPublished === false)

    return(
        <div>
            <nav>
                <a>All Posts</a>
                <a>Published Posts</a>
                <a>Unpublished Posts</a>
            </nav>
        </div>
    )
}

export default AllPosts