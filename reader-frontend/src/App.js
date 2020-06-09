import React, {useContext} from 'react';
import Header from './Components/Header'
import {AppContext} from './Context/Context'
import BlogPost from './Components/BlogPost'
import { Switch, Link } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'

import './App.css';

function App() {

  const { allBlogPosts, isLoading } = useContext(AppContext)

  const posts = allBlogPosts.map(post => <BlogPost key={post._id} post={post} />)

  return (
    <div className="App">
      <header className="App-header">
          <Header />

          <Switch>
            <Link exact path="/">
              <Home />
            </Link>

            <Link path="/posts">
              <Posts />
            </Link>

          </Switch>
          
          {/* {isLoading && <p>Blog posts are loading...</p>}
          {allBlogPosts.length !== 0 && posts }  */}
          
      </header>
    </div>
  );
}

export default App;
