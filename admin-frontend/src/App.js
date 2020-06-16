import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import {Login, Welcome} from './Pages/'

function App() {
  return (
    <div className="App">
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/admin">
          <Welcome />
        </Route>
    </div>
  );
}

export default App;


