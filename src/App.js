import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import SignUp from './auth-component/SignUp';
import Login from './auth-component/Login';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { jwtVerify } from 'jose';
import Main from './components/Main.js';
import Searchpage from './seachpage/searchpage';
import CampgroundDetails from './seachpage/CampgroundDetails';
import NewCampForm from './newcamp/NewCampForm.js';
import PrivateRoute from './privateroute/PrivateRoute';
<<<<<<< HEAD
import Dashboard from 'dashboard/Dashboard';
=======
>>>>>>> 1ebec6a (fix:setup with backend)
const App = () => {
    // Define state variable for the JWT
    // Retrieve the JWT from localStorage
    const [token, setToken] = useState(() => {
        const storedToken = localStorage.getItem('jwt');
        if (storedToken) {
            console.log(storedToken);
            return storedToken;
        }
        return null;
    });
    //usenavigate
    const navigate = useNavigate();
    // Define state variable for the user ID
    const [userId, setUserId] = useState(null);
    // Decode the JWT to get the user ID
    const verifyToken = async () => {
        try {
            if (token) {
                const secret = new TextEncoder().encode('secret_key');
                const { payload } = await jwtVerify(token, secret);
                console.log(payload);
                setUserId(payload.id);
            }
        }
        catch (err) {
            setUserId(null);
            setToken(null);
        }
    };
    useEffect(() => {
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
    useEffect(() => {
        if (userId) {
            navigate('/home');
        }
    }, [userId]);
<<<<<<< HEAD
    return (_jsx(_Fragment, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/signup", element: _jsx(SignUp, { setToken: setToken }) }), _jsx(Route, { path: "/login", element: _jsx(Login, { setToken: setToken }) }), _jsx(Route, { path: "/", element: _jsx(Main, {}) }), _jsx(Route, { path: '/search/*', element: _jsx(Searchpage, {}) }), _jsx(Route, { path: "/campgrounds/:campgroundId", element: _jsx(CampgroundDetails, { token: token }) }), _jsx(Route, { path: '/dashboard', element: _jsx(PrivateRoute, { children: _jsx(Dashboard, { token: token }) }) }), _jsx(Route, { path: '/createcamp', element: _jsx(PrivateRoute, { children: _jsx(NewCampForm, { token: token }) }) })] }) }));
=======
    return (_jsx(_Fragment, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/signup", element: _jsx(SignUp, { setToken: setToken }) }), _jsx(Route, { path: "/login", element: _jsx(Login, { setToken: setToken }) }), _jsx(Route, { path: "/", element: _jsx(Main, {}) }), _jsx(Route, { path: '/search/*', element: _jsx(Searchpage, {}) }), _jsx(Route, { path: "/campgrounds/:campgroundId", element: _jsx(CampgroundDetails, { token: token }) }), _jsx(Route, { path: '/createcamp', element: _jsx(PrivateRoute, { children: _jsx(NewCampForm, { token: token }) }) })] }) }));
>>>>>>> 1ebec6a (fix:setup with backend)
};
export default App;
//# sourceMappingURL=App.js.map