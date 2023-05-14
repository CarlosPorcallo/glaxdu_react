import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap CSS
import './assets/css/bootstrap.min.css'
// Icon Font CSS
import './assets/css/icons.min.css'
 // Plugins CSS
import './assets/css/plugins.css'
// Main Style CSS
import './assets/css/style.css'

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();