import React, {useContext} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {AppContext} from '../Context/AppContext'

import AllPosts from './AllPosts'
import AllComments from './Comments';
import CreateNewPost from './CreateNewPost'

function Welcome() {
    const {user} = useContext(AppContext)

    return(
        <div className="main">
            <nav className="side-nav">
                <Link to="/admin/create-post">Create a New Post</Link>
                <Link to="/admin/posts">View All Posts</Link>
                <Link to="/admin/comments">Comments</Link>
                <a>Log Out</a>
            </nav>
            <div className="content">
                <Switch>
                    <Route exact path="/admin">
                        <h1>Welcome {user}! Blog Dashboard</h1>
                    </Route>
                    <Route path="/admin/posts" component={AllPosts}/>
    
                    <Route path="/admin/comments" component={AllComments}/>
                    <Route path="/admin/create-post" component={CreateNewPost}/>

                </Switch>
            </div>
            
        </div>
    )
}

export default Welcome