import React, {useEffect, useContext} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {AppContext} from '../Context/AppContext'

import BlogTable from '../Components/BlogTable'


function AllPosts() {
    const { getAllPosts, allPosts } = useContext(AppContext)

    useEffect(() => {
        getAllPosts()
    }, [])
    
    const publishedPosts = allPosts.filter(post => post.isPublished)
    const unpublishedPosts = allPosts.filter(post => !post.isPublished)

    return(
        <React.Fragment >
            <h1>Blog Posts</h1>
            <nav>
                <Link to="/admin/posts">All Posts</Link>
                <Link to="/admin/posts/published">Published Posts</Link>
                <Link to="/admin/posts/unpublished">Unpublished Posts</Link>
                
            </nav>
            <div className="blog-list">
                <Switch>
                    <Route exact path="/admin/posts">
                        <BlogTable posts={allPosts} />
                    </Route>
                    <Route path="/admin/posts/published">
                        <BlogTable posts={publishedPosts} />
                    </Route>
                    <Route path="/admin/posts/unpublished">
                        <BlogTable posts={unpublishedPosts} />
                    </Route>

                </Switch>
            </div>
        </React.Fragment>
    )
}

export default AllPosts