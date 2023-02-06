import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Imagen from './Images/Imagen'
import Search from './SearchBar/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Imagen/>
    <App />
    <Search/>
  </React.StrictMode>
);