// This file is the entry point for the React application. 
// It renders the App component into the root element of the HTML document.
// It also imports global styles and a reportWebVitals function for performance monitoring.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
