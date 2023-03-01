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
const SignUp_1 = __importDefault(require("./auth-component/SignUp"));
const Login_1 = __importDefault(require("./auth-component/Login"));
const Home_1 = __importDefault(require("./Home"));
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const jose_1 = require("jose");
const Main_1 = __importDefault(require("./components/Main"));
const App = () => {
    // Define state variable for the JWT
    // Retrieve the JWT from localStorage
    const [token, setToken] = (0, react_1.useState)(() => {
        const storedToken = localStorage.getItem('jwt');
        if (storedToken) {
            return storedToken;
        }
        return null;
    });
    //usenavigate
    const navigate = (0, react_router_dom_1.useNavigate)();
    // Define state variable for the user ID
    const [userId, setUserId] = (0, react_1.useState)(null);
    // Decode the JWT to get the user ID
    const verifyToken = async () => {
        try {
            if (token) {
                const secret = new TextEncoder().encode('secret_key');
                const { payload } = await (0, jose_1.jwtVerify)(token, secret);
                console.log(payload);
                setUserId(payload.id);
            }
        }
        catch (err) {
            console.error(err);
            setUserId(null);
        }
    };
    (0, react_1.useEffect)(() => {
        verifyToken();
        // Store the JWT in localStorage whenever it changes
        if (token) {
            localStorage.setItem('jwt', token);
        }
        else {
            localStorage.removeItem('jwt');
        }
    }, [token]);
    (0, react_1.useEffect)(() => {
        if (userId) {
            navigate('/home');
        }
    }, [userId]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.Routes, null, !userId ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/signup", element: react_1.default.createElement(SignUp_1.default, { setToken: setToken }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/login", element: react_1.default.createElement(Login_1.default, { setToken: setToken }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/main", element: react_1.default.createElement(Main_1.default, null) }))) : (react_1.default.createElement(react_router_dom_1.Route, { path: '/home', element: react_1.default.createElement(Home_1.default, { token: token, setUserId: setUserId, userId: userId, setToken: setToken }) })))));
};
exports.default = App;
//# sourceMappingURL=App.js.map