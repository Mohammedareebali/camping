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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const axios_1 = __importDefault(require("axios"));
const Login = ({ setToken }) => {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [error, setError] = (0, react_1.useState)(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios_1.default.post('http://localhost:5000/login', { email, password });
            setToken(response.data.token);
        }
        catch (err) {
            setError('Incorrect email or password');
        }
    };
    return (react_1.default.createElement(react_bootstrap_1.Form, { onSubmit: handleSubmit },
        error && react_1.default.createElement(react_bootstrap_1.Alert, { variant: "danger" }, error),
        react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "formBasicEmail" },
            react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Email address"),
            react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "email", placeholder: "Enter email", value: email, onChange: e => setEmail(e.target.value) })),
        react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "formBasicPassword" },
            react_1.default.createElement(react_bootstrap_1.Form.Label, null, "Password"),
            react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "password", placeholder: "Password", value: password, onChange: e => setPassword(e.target.value) })),
        react_1.default.createElement(react_bootstrap_1.Button, { variant: "primary", type: "submit" }, "Login")));
};
exports.default = Login;
//# sourceMappingURL=Login.js.map