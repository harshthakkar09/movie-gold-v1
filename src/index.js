import React from 'react';
import { createRoot } from 'react-dom/client'; // Change the import
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

import { Routes, Route } from 'react-router-dom'; // Import Routes and Route components

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
