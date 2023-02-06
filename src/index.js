import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Imagen from './Components/Images/Imagen'
import {Cards} from './Components/Tarjetas/Tarjeta.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Imagen/>
    <App />
    <Cards/>
  </React.StrictMode>
);