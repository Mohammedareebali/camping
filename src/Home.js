"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Home = ({ userId, setUserId, token, setToken }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleLogout = async () => {
        try {
            const response = await fetch('/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                // logut successfull
                // remove token from  localStorage
                localStorage.removeItem('jwt');
                // Remove token from state
                setToken(null);
                setUserId(null);
                // redirect to /
                navigate('/');
            }
            else {
                console.error('Failed to log out');
            }
        }
        catch (error) {
            console.error('Error logging out', error);
        }
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null,
            "Welcome, user with ID: ",
            userId),
        react_1.default.createElement("button", { onClick: handleLogout }, "Logout")));
};
exports.default = Home;
//# sourceMappingURL=Home.js.map