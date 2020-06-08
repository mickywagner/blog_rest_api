import React, {useState, useEffect} from 'react';
import Header from './Components/Header'

import './App.css';

function App() {
  
  const [allPosts, setAllPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(json => {
        setAllPosts(json)
        setIsLoading(false)
      }
      )
      .catch(err => console.log(err))
  }, [])

  const posts = allPosts.map(post => (
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

          {allPosts.length !== 0 && posts } 
          
      </header>
    </div>
  );
}

export default App;
