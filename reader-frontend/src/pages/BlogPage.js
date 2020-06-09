import React, {useContext} from 'react';
import BlogWithComment from '../Components/BlogWithComment'
import { AppContext } from '../Context/Context'

function BlogPage({match}) {
    const { allBlogPosts } = useContext(AppContext)

    const post = allBlogPosts.find(post => post._id === match.params.id)

    return(
        <div>
            {allBlogPosts.length !== 0 ? <BlogWithComment post={post} key={post._id}/> : <p>Blog post is loading...</p>}
        </div> 
    )
}

export default BlogPage