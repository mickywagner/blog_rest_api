import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppContext, AppContextProvider} from './Context/Context'



ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
        <App />
    </AppContextProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);
