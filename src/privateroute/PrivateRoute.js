"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const PrivateRoute = ({ children }) => {
    const auth = localStorage.getItem('isAuthenticated');
    return auth ? children : react_1.default.createElement(react_router_dom_1.Navigate, { to: '/login' });
};
exports.default = PrivateRoute;
//# sourceMappingURL=PrivateRoute.js.map