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
const SignUp = ({ setToken }) => {
    // Define state variables for the email and password
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [password2, setPassword2] = (0, react_1.useState)('');
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
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            setToken(response);
        }
        catch (error) {
            console.error(error);
        }
    };
    return (react_1.default.createElement(react_bootstrap_1.Container, null,
        react_1.default.createElement(react_bootstrap_1.Row, { className: "justify-content-md-center" },
            react_1.default.createElement(react_bootstrap_1.Col, { md: "auto" },
                react_1.default.createElement(react_bootstrap_1.Form, { onSubmit: handleSubmit },
                    react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "formEmail" },
                        react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Email address"),
                        react_1.default.createElement(react_bootstrap_1.FormControl, { type: "email", value: email, onChange: (event) => setEmail(event.target.value) })),
                    react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "formPassword" },
                        react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Password"),
                        react_1.default.createElement(react_bootstrap_1.FormControl, { type: "password", value: password, onChange: (event) => setPassword(event.target.value) })),
                    react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "formConfirmPassword" },
                        react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Confirm Password"),
                        react_1.default.createElement(react_bootstrap_1.FormControl, { type: "password", value: password2, onChange: (event) => setPassword2(event.target.value) })),
                    react_1.default.createElement(react_bootstrap_1.Button, { type: "submit" }, "Sign Up")))),
        react_1.default.createElement("div", null,
            react_1.default.createElement("p", null,
                "Already have an account? ",
                react_1.default.createElement(react_router_dom_1.Link, { to: "/login" }, "Login")))));
};
exports.default = SignUp;
//# sourceMappingURL=SignUp.js.map