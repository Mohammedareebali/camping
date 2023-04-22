import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const img = require('../pics/icon-small.png');
const NavComponent = () => {
    return (_jsx(Navbar, { bg: "white", variant: "light", expand: "lg", sticky: "top", children: _jsxs(Container, { children: [_jsx(Navbar.Brand, { children: _jsx(Link, { to: "/", className: "navbar-brand", children: _jsxs("span", { children: [_jsx("img", { src: img, alt: "this" }), "YelpCamp"] }) }) }), _jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }), _jsxs(Navbar.Collapse, { id: "basic-navbar-nav", children: [_jsx(Nav, { className: "me-auto" }), _jsxs(Nav, { children: [_jsx(Link, { to: "/login", className: "nav-link", children: _jsx("span", { children: "Login" }) }), _jsx(Button, { variant: "dark", style: { color: "white" }, children: "Create New Account" })] })] })] }) }));
};
export default NavComponent;
//# sourceMappingURL=Nav.js.map