import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const img = require('../pics/icon-small.png');
const NavComponent = ({ loggedIn }) => {
    const backendUrl = 'https://yelcamp-backend.herokuapp.com';
    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${backendUrl}/api/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                // logout successful
                // remove token from localStorage
                localStorage.removeItem('jwt');
                // Remove token and userId from state
                // redirect to /
            }
            else {
                console.error('Failed to log out');
            }
        }
        catch (error) {
            console.error('Error logging out', error);
        }
    };
    return (_jsx(Navbar, { bg: "#191a1a", variant: "dark", expand: "lg", children: _jsxs(Container, { children: [_jsx(Navbar.Brand, { children: _jsx(Link, { to: "/", className: "navbar-brand", children: _jsxs("span", { children: [_jsx("img", { src: img, alt: "this" }), "YelpCamp"] }) }) }), _jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }), _jsxs(Navbar.Collapse, { id: "basic-navbar-nav", children: [_jsx(Nav, { className: "me-auto" }), _jsx(Nav, { children: loggedIn ? (
                            // Navigation items for logged-in users
                            _jsxs(_Fragment, { children: [_jsx(Link, { to: "/profile", className: "nav-link", children: _jsx("span", { children: "Profile" }) }), _jsx(Button, { onClick: handleLogout, children: "Logout" })] })) : (
                            // Navigation items for non-logged-in users
                            _jsxs(_Fragment, { children: [_jsx(Link, { to: "/login", className: "nav-link", children: _jsx("span", { children: "Login" }) }), _jsx(Link, { to: "/register", children: _jsx(Button, { variant: "dark", style: { color: "white" }, children: "Create New Account" }) })] })) })] })] }) }));
};
export default NavComponent;
//# sourceMappingURL=Nav.js.map