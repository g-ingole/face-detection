import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';

import ParticlesBg from 'particles-bg'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ParticlesBg type="lines" bg={{
      position: "absolute",
      zIndex: -999,
      height: 1200
    }} />

    <App />
  </React.StrictMode>
);

