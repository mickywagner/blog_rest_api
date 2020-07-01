import React, {useContext} from 'react';
import {AppContext} from '../Context/Context'
import BlogPost from '../Components/BlogPost'
import Sidebar from '../Components/Sidebar'

function Posts() {

    const { allBlogPosts, isLoading } = useContext(AppContext)

    const posts = allBlogPosts.map(post => <BlogPost key={post._id} post={post} />)

    return(
        <div className="main">

            <div className="posts">
                {isLoading && <p>Blog posts are loading...</p>}
                {allBlogPosts.length !== 0 && posts } 
                {!isLoading & allBlogPosts.length === 0 ? "No blog posts found :(" : null}
            </div>

            <Sidebar />
  
        </div>
    )
}

export default Posts