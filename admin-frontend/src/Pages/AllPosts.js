import React, { useContext, useEffect } from 'react';
import {AppContext} from '../Context/AppContext'
import {Link, Route, Switch} from 'react-router-dom';

import BlogListItem from '../Components/BlogList'

function AllPosts() {
    const { getAllPosts, allPosts } = useContext(AppContext)

    useEffect(() => {
        getAllPosts()
    }, [])



    const posts = allPosts.length > 1 ? allPosts.map(post => <BlogListItem key={post._id} title={post.title} />) : null
    const publishedPosts = allPosts.length > 1 ? allPosts.filter(post => post.isPublished).map(post => <BlogListItem key={post._id} title={post.title} />)  : null
    const unpublishedPosts = allPosts.length > 1 ? allPosts.filter(post => !post.isPublished).map(post => <BlogListItem key={post._id} title={post.title} />) : null
    
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
                   {posts}
                </Route>
                <Route path="/admin/posts/published">
                   {publishedPosts}
                </Route>
                <Route path="/admin/posts/unpublished">
                    {unpublishedPosts}
                </Route>
            </Switch>
            </div>
        </React.Fragment>
    )
}

export default AllPosts