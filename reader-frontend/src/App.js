import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [allPosts, setAllPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3001/api/posts')
      .then(response => response.json())
      .then(json => {
        setAllPosts(json)
        console.log(json)
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
          <h1>Reader Front-end</h1>
          {isLoading && <p>Blog posts are loading...</p>}

          {allPosts.length !== 0 && posts } 
          
      </header>
    </div>
  );
}

export default App;
