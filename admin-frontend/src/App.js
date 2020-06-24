import React, {useContext, useEffect} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"

import {Login, Welcome} from './Pages/'
import { AppContext } from './Context/AppContext';

function App() {
  const {isLoggedIn} = useContext(AppContext)

  useEffect(() => {
    console.log(isLoggedIn)
  }, [isLoggedIn])

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          {isLoggedIn ? <Welcome /> : <Login />}
        </Route>
        <Route path="/admin">
          {isLoggedIn ? <Welcome /> : <Login />}
        </Route>
      </Switch>  
    </div>
  );
}

export default App;


