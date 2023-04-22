import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
    const auth = localStorage.getItem('isAuthenticated');
    return auth ? children : _jsx(Navigate, { to: '/login' });
};
export default PrivateRoute;
//# sourceMappingURL=PrivateRoute.js.map