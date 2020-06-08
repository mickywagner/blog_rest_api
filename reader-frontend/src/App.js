import React, {useContext} from 'react';
import Header from './Components/Header'
import {AppContext} from './Context/Context'

import './App.css';

function App() {

  const { allBlogPosts, isLoading } = useContext(AppContext)

  const posts = allBlogPosts.map(post => (
    <div>
      <h5>{post.title}</h5>
      <p>{post.text}</p>
    </div>
  ))

  return (
    <div className="App">
      <header className="App-header">
          <Header />
          {isLoading && <p>Blog posts are loading...</p>}

          {allBlogPosts.length !== 0 && posts } 
          
      </header>
    </div>
  );
}

export default App;
