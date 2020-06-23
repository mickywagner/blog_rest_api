import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import BlogTable from '../Components/BlogTable'

function AllPosts() {
    
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
                    <BlogTable />
                </Route>
                <Route path="/admin/posts/published">
                   <BlogTable />
                </Route>
                <Route path="/admin/posts/unpublished">
                    <BlogTable />
                </Route>
            </Switch>
            </div>
        </React.Fragment>
    )
}

export default AllPosts