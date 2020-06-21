import React, {useContext, useEffect} from 'react';
import {AppContext} from '../Context/AppContext'
import {Link, Route, Switch} from 'react-router-dom';
import AllPosts from './AllPosts'
import AllComments from './Comments';


function Welcome() {
    const {getAllPosts, getAllComments} = useContext(AppContext)

    useEffect(() => {
        getAllPosts()
        getAllComments()
    }, [])


    return(
        <div className="main">
            <nav>
                <Link to="/admin/create-post"><a>Create a New Post</a></Link>
                <Link to="/admin/posts"><a>View All Posts</a></Link>
                <Link to="/admin/comments"><a>Comments</a></Link>
                <a>Log Out</a>
            </nav>
            <div className="content">
                <h1>Welcome To Your Blog Dashboard</h1>
                <Switch>
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