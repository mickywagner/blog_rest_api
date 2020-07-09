import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import {AppContextProvider} from './Context/Context'
import { BrowserRouter as Router } from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <App />
        </Router>
    </AppContextProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);
