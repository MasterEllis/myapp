import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

// function rederHello(){
//   return React.createElement("h1", null, "HELLO WORLD");
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        
    {/* {rederHello()} */}
    <App />
  </React.StrictMode>
);



