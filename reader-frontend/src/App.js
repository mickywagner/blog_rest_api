import React from 'react';
import Header from './Components/Header'

import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import BlogPage from './pages/BlogPage'

import './App.css';

function App() {

  return (
    <div className="App">
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/posts">
              <Posts />
            </Route>

            <Route path='/posts/:id' component={BlogPage}>
            </Route>

          </Switch>
    </div>
  );
}

export default App;
