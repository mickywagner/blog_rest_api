import React, {useContext, useEffect} from 'react';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom"
import {Login, Welcome} from './Pages/'
import { AppContext } from './Context/AppContext';

function App() {
  const {isLoggedIn} = useContext(AppContext)

  useEffect(() => {
    console.log(isLoggedIn)
  })
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/admin" /> : <Login />}
        </Route>
        <Route path="/admin">
          <Welcome />
        </Route>
      </Switch>  
    </div>
  );
}

export default App;


