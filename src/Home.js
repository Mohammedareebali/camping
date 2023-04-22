import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
const Home = ({ userId, setUserId, token, setToken }) => {
    const navigate = useNavigate();
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
    return (_jsxs("div", { children: [_jsxs("h1", { children: ["Welcome, user with ID: ", userId] }), _jsx("button", { onClick: handleLogout, children: "Logout" })] }));
};
export default Home;
//# sourceMappingURL=Home.js.map