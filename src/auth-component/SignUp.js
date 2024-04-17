import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormControl, Button, Alert, Row, Col, Card } from 'react-bootstrap';
const img = require('../pics/icon-small.png');
const authorImg = require('../pics/a.png');
const SignUp = ({ setToken }) => {
    // Define state variables for the email and password
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const backendUrl = 'http://localhost:5001';
    const navigate = useNavigate();
    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Send a POST request to the server to create a new user
            const response = await fetch(`${backendUrl}/api/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, password2 }),
            });
            if (response.ok) {
                const data = await response.json();
                setToken(data.token);
                navigate('/home');
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
    return (_jsxs("div", { className: "containers", children: [_jsxs("section", { className: "login-form", children: [_jsxs("div", { className: 'logo-text', children: [_jsx("p", { children: _jsxs("b", { children: [" ", _jsx("img", { src: img, alt: 'this' }), "yelpCamp"] }) }), _jsx(Link, { to: "/", children: _jsxs("p", { className: 'back', children: [_jsx("i", { className: "fas fa-arrow-left" }), " Back"] }) })] }), _jsxs("div", { className: "forms", children: [_jsx("h2", { children: _jsx("b", { children: "Start exploring camps from all over around the world" }) }), _jsxs(Form, { onSubmit: handleSubmit, children: [error && _jsx(Alert, { variant: "danger", children: error }), _jsxs(Form.Group, { controlId: "formBasicEmail", children: [_jsx(Form.Label, { children: "Email address" }), _jsx(Form.Control, { type: "email", placeholder: "Enter email", value: email, onChange: e => setEmail(e.target.value) })] }), _jsxs(Form.Group, { controlId: "formBasicPassword", children: [_jsx(Form.Label, { children: "Password" }), _jsx(Form.Control, { type: "password", placeholder: "Password", value: password, onChange: e => setPassword(e.target.value) })] }), _jsxs(Form.Group, { controlId: "formConfirmPassword", children: [_jsx(Form.Label, { children: "Confirm Password" }), _jsx(FormControl, { type: "password", value: password2, onChange: (event) => setPassword2(event.target.value) })] }), _jsx(Button, { variant: "primary", type: "submit", children: "Login" })] }), _jsxs("p", { children: ["Already have an account? ", _jsx(Link, { to: "/login", children: "Login" })] })] })] }), _jsx("div", {}), _jsxs("section", { className: "testimonial", children: [_jsx("h3", { children: "\"YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added\"" }), _jsx(Card, { children: _jsxs(Row, { children: [_jsx(Col, { md: 2, children: _jsx("div", { className: "imag", children: _jsx("img", { className: 'img', src: authorImg, alt: 'that' }) }) }), _jsx(Col, { md: 10, children: _jsxs("div", { className: 'column', children: [_jsx("p", { className: "name", children: _jsx("b", { children: "Mohammed Areeb Ali" }) }), _jsx("p", { className: 'profession', children: "Professional hiker" })] }) })] }) })] })] }));
};
export default SignUp;
//# sourceMappingURL=SignUp.js.map