// src/main.tsx or src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import './index.css'; // Ensure you have your base styles imported if you've set any

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);