import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Alert, Card, Row, Col } from 'react-bootstrap';
import '../auth-css/login.css';
const img = require('../pics/icon-small.png');
const campimg = require('../pics/heroimage.jpg');
const authorImg = require('../pics/a.png');
const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const backendUrl = 'http://localhost:5001';
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${backendUrl}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            if (response.ok) {
                const data = await response.json();
                setToken(data.token);
                navigate('/search');
            }
            else {
                const errorData = await response.json();
                setError('Incorrect email or password');
            }
        }
        catch (err) {
            setError('Incorrect email or password');
            console.log(err);
        }
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "containers", children: [_jsxs("section", { className: "login-form", children: [_jsxs("div", { className: 'logo-text', children: [_jsx("p", { children: _jsxs("b", { children: [" ", _jsx("img", { src: img, alt: 'this' }), "yelpCamp"] }) }), _jsx(Link, { to: "/", children: _jsxs("p", { className: 'back', children: [_jsx("i", { className: "fas fa-arrow-left" }), " Back"] }) })] }), _jsxs("div", { className: "forms", children: [_jsx("h2", { children: _jsx("b", { children: "Start exploring camps from all over around the world" }) }), _jsxs(Form, { onSubmit: handleSubmit, children: [error && _jsx(Alert, { variant: "danger", children: error }), _jsxs(Form.Group, { controlId: "formBasicEmail", children: [_jsx(Form.Label, { children: "Email address" }), _jsx(Form.Control, { type: "email", placeholder: "Enter email", value: email, onChange: e => setEmail(e.target.value) })] }), _jsxs(Form.Group, { controlId: "formBasicPassword", children: [_jsx(Form.Label, { children: "Password" }), _jsx(Form.Control, { type: "password", placeholder: "Password", value: password, onChange: e => setPassword(e.target.value) })] }), _jsx(Button, { type: "submit", children: "Login" })] }), _jsxs("p", { children: ["Not a user yet? ", _jsx(Link, { to: "/signup", children: "Create an account" })] })] })] }), _jsxs("section", { className: "testimonial", children: [_jsx("h3", { children: "\"YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added\"" }), _jsx(Card, { children: _jsxs(Row, { children: [_jsx(Col, { md: 2, children: _jsx("div", { className: "imag", children: _jsx("img", { className: 'img', src: authorImg, alt: 'that' }) }) }), _jsx(Col, { md: 10, children: _jsxs("div", { className: 'column', children: [_jsx("p", { className: "name", children: _jsx("b", { children: "Mohammed Areeb Ali" }) }), _jsx("p", { className: 'profession', children: "Professional hiker" })] }) })] }) })] })] }) }));
};
export default Login;
//# sourceMappingURL=Login.js.map