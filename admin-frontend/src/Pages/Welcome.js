import React, {useContext, useEffect} from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import AllPosts from './AllPosts'
import AllComments from './Comments';

function Welcome() {
    return(
        <div className="main">
            <nav className="side-nav">
                <Link to="/admin/create-post"><a>Create a New Post</a></Link>
                <Link to="/admin/posts"><a>View All Posts</a></Link>
                <Link to="/admin/comments"><a>Comments</a></Link>
                <a>Log Out</a>
            </nav>
            <div className="content">
                <Switch>
                    <Route exact path="/admin">
                        <h1>Welcome To Your Blog Dashboard</h1>
                    </Route>
                    <Route path="/admin/posts">
                        <AllPosts />
                    </Route>
                    <Route path="/admin/comments">
                        <AllComments />
                    </Route>
                </Switch>
            </div>
            
        </div>
    )
}

export default Welcome