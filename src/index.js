<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
=======
import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(_jsx(BrowserRouter, { children: _jsx(App, {}) }));
//# sourceMappingURL=index.js.map
>>>>>>> 1ebec6a (fix:setup with backend)
