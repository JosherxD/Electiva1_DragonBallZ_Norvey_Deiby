import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {DragonBallApi} from './DragonBallApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DragonBallApi />
  </React.StrictMode>
);
