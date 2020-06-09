import React, {useContext} from 'react';
import Header from './Components/Header'

import { Switch, Link } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'

import './App.css';

function App() {

  return (
    <div className="App">
          <Header />

          <Switch>
            <Link exact path="/">
              <Home />
            </Link>

            <Link path="/posts">
              <Posts />
            </Link>

          </Switch>
    </div>
  );
}

export default App;
