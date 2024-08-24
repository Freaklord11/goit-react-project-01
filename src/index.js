import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // Importing App from the correct path
import './index.css'; // Importing global CSS if needed

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
