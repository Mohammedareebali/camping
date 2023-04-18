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
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const jose_1 = require("jose");
const Main_1 = __importDefault(require("./components/Main"));
const searchpage_1 = __importDefault(require("./seachpage/searchpage"));
const CampgroundDetails_1 = __importDefault(require("./seachpage/CampgroundDetails"));
const NewCampForm_1 = __importDefault(require("./newcamp/NewCampForm"));
const PrivateRoute_1 = __importDefault(require("./privateroute/PrivateRoute"));
const App = () => {
    // Define state variable for the JWT
    // Retrieve the JWT from localStorage
    const [token, setToken] = (0, react_1.useState)(() => {
        const storedToken = localStorage.getItem('jwt');
        if (storedToken) {
            console.log(storedToken);
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
            setUserId(null);
            setToken(null);
        }
    };
    (0, react_1.useEffect)(() => {
        verifyToken();
        // Store the JWT in localStorage whenever it changes
        if (token) {
            localStorage.setItem('jwt', token);
            localStorage.setItem('isAuthenticated', 'true');
        }
        else {
            localStorage.removeItem('jwt');
            localStorage.removeItem('isAuthenticated');
        }
    }, [token]);
    (0, react_1.useEffect)(() => {
        if (userId) {
            navigate('/home');
        }
    }, [userId]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/signup", element: react_1.default.createElement(SignUp_1.default, { setToken: setToken }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/login", element: react_1.default.createElement(Login_1.default, { setToken: setToken }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/main", element: react_1.default.createElement(Main_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/search/*', element: react_1.default.createElement(searchpage_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/campgrounds/:campgroundId", element: react_1.default.createElement(CampgroundDetails_1.default, { token: token }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/createcamp', element: react_1.default.createElement(PrivateRoute_1.default, null,
                    react_1.default.createElement(NewCampForm_1.default, { token: token })) }))));
};
exports.default = App;
//# sourceMappingURL=App.js.map