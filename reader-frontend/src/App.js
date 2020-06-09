import React, {useContext} from 'react';
import Header from './Components/Header'

import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'

import './App.css';

function App() {

  return (
    <div className="App">
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/posts">
              <Posts />
            </Route>

          </Switch>
    </div>
  );
}

export default App;
