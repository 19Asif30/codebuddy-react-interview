import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import worker from './mocks/browser';
import './styles/index.css';

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
