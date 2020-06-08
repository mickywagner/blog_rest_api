import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import {AppContextProvider} from './Context/Context'
import { BrowserRouter as Router } from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
        <Router>
          <App />
        </Router>
    </AppContextProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);
