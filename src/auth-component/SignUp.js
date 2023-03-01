"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_bootstrap_1 = require("react-bootstrap");
const img = require('../pics/icon-small.png');
const authorImg = require('../pics/a.png');
const SignUp = ({ setToken }) => {
    // Define state variables for the email and password
    const [email, setEmail] = (0, react_1.useState)('');
    const [error, setError] = (0, react_1.useState)(null);
    const [password, setPassword] = (0, react_1.useState)('');
    const [password2, setPassword2] = (0, react_1.useState)('');
    const navigate = (0, react_router_dom_1.useNavigate)();
    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Send a POST request to the server to create a new user
            const response = await fetch('http://localhost:5000/signup', {
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
    return (react_1.default.createElement("div", { className: "containers" },
        react_1.default.createElement("section", { className: "login-form" },
            react_1.default.createElement("div", { className: 'logo-text' },
                react_1.default.createElement("p", null,
                    react_1.default.createElement("b", null,
                        " ",
                        react_1.default.createElement("img", { src: img, alt: 'this' }),
                        "yelpCamp")),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/main" },
                    react_1.default.createElement("p", { className: 'back' },
                        react_1.default.createElement("i", { className: "fas fa-arrow-left" }),
                        " Back"))),
            react_1.default.createElement("div", { className: "forms" },
                react_1.default.createElement("h2", null,
                    react_1.default.createElement("b", null, "Start exploring camps from all over around the world")),
                react_1.default.createElement(react_bootstrap_1.Form, { onSubmit: handleSubmit },
                    error && react_1.default.createElement(react_bootstrap_1.Alert, { variant: "danger" }, error),
                    react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "formBasicEmail" },
                        react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Email address"),
                        react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "email", placeholder: "Enter email", value: email, onChange: e => setEmail(e.target.value) })),
                    react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "formBasicPassword" },
                        react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Password"),
                        react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "password", placeholder: "Password", value: password, onChange: e => setPassword(e.target.value) })),
                    react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "formConfirmPassword" },
                        react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Confirm Password"),
                        react_1.default.createElement(react_bootstrap_1.FormControl, { type: "password", value: password2, onChange: (event) => setPassword2(event.target.value) })),
                    react_1.default.createElement(react_bootstrap_1.Button, { variant: "primary", type: "submit" }, "Login")),
                react_1.default.createElement("p", null,
                    "Already have an account? ",
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/login" }, "Login")))),
        react_1.default.createElement("div", null),
        react_1.default.createElement("section", { className: "testimonial" },
            react_1.default.createElement("h3", null, "\"YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added\""),
            react_1.default.createElement(react_bootstrap_1.Card, null,
                react_1.default.createElement(react_bootstrap_1.Row, null,
                    react_1.default.createElement(react_bootstrap_1.Col, { md: 2 },
                        react_1.default.createElement("div", { className: "imag" },
                            react_1.default.createElement("img", { className: 'img', src: authorImg, alt: 'that' }))),
                    react_1.default.createElement(react_bootstrap_1.Col, { md: 10 },
                        react_1.default.createElement("div", { className: 'column' },
                            react_1.default.createElement("p", { className: "name" },
                                react_1.default.createElement("b", null, "Mohammed Areeb Ali")),
                            react_1.default.createElement("p", { className: 'profession' }, "Professional hiker"))))))));
};
exports.default = SignUp;
//# sourceMappingURL=SignUp.js.map