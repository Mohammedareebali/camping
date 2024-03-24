import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(_jsx(BrowserRouter, { children: _jsx(App, {}) }));
//# sourceMappingURL=index.js.map