"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
const img = require('../pics/icon-small.png');
const NavComponent = () => {
    return (react_1.default.createElement(react_bootstrap_1.Navbar, { bg: "white", variant: "light", expand: "lg", sticky: "top" },
        react_1.default.createElement(react_bootstrap_1.Container, null,
            react_1.default.createElement(react_bootstrap_1.Navbar.Brand, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "navbar-brand" },
                    react_1.default.createElement("span", null,
                        react_1.default.createElement("img", { src: img, alt: "this" }),
                        "YelpCamp"))),
            react_1.default.createElement(react_bootstrap_1.Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }),
            react_1.default.createElement(react_bootstrap_1.Navbar.Collapse, { id: "basic-navbar-nav" },
                react_1.default.createElement(react_bootstrap_1.Nav, { className: "me-auto" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "nav-link" },
                        react_1.default.createElement("span", null, "Home"))),
                react_1.default.createElement(react_bootstrap_1.Nav, null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/login", className: "nav-link" },
                        react_1.default.createElement("span", null, "Login")),
                    react_1.default.createElement(react_bootstrap_1.Button, { variant: "dark", style: { color: "white" } }, "Create New Account"))))));
};
exports.default = NavComponent;
//# sourceMappingURL=Nav.js.map