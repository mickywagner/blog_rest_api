import React, {useContext} from 'react';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom"
import {Login, Welcome} from './Pages/'
import { AppContext } from './Context/AppContext';

function App() {
  const {isLoggedIn} = useContext(AppContext)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/admin" /> : <Login />}
        </Route>
        <Route path="/admin" component={Welcome} />
      </Switch>  
    </div>
  );
}

export default App;


