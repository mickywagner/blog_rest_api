import React, {useContext} from 'react';
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import {AppContext} from '../Context/AppContext'

import AllPosts from './AllPosts'
import AllComments from './AllComments';
import CreateNewPost from './CreateNewPost'
import EditPost from './EditPost';


function Welcome() {
    const {user, setUser, setIsLoggedIn} = useContext(AppContext)

    const logout = () => {
        fetch('/logout')
            .then(res => {
                if(res.status === 200) {
                    setUser('')
                    setIsLoggedIn(false)
                    return <Redirect to="/login" />
                }
            })
            
    }

    return(
        <div className="main">
            <nav className="side-nav">
                <Link to="/admin/create-post">Create a New Post</Link>
                <Link to="/admin/posts">View All Posts</Link>
                <Link to="/admin/comments">Comments</Link>
            
                <button onClick={logout}>Log out</button>
            </nav>
            <div className="content">
                <Switch>
                    <Route exact path="/admin">
                        <h1>Welcome {user}! Blog Dashboard</h1>
                    </Route>
                    <Route path="/admin/posts/:postId/edit" component={EditPost}/>
                    <Route path="/admin/posts" component={AllPosts} />
                    <Route path="/admin/comments" component={AllComments}/>
                    <Route path="/admin/create-post" component={CreateNewPost}/>
                    
                   

                </Switch>
            </div>
            
        </div>
    )
}

export default Welcome