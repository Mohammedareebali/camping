import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
<<<<<<< HEAD
// Dashboard.tsx
import { useEffect, useState } from 'react';
import NewCampForm from "../newcamp/NewCampForm"; // import your CreateNewCamp component
const Dashboard = ({ token }) => {
    const [profile, setProfile] = useState(null);
    const [postedItems, setPostedItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    // TODO: Implement data fetching logic here
    useEffect(() => {
        // Fetch and set profile, postedItems, favorites
    }, []);
    return (_jsxs("div", { className: "dashboard", children: [_jsx("div", { className: "profile-section", children: _jsx("h2", { children: "Profile" }) }), _jsx("div", { className: "posted-section", children: _jsx("h2", { children: "Posted Items" }) }), _jsx("div", { className: "favorites-section", children: _jsx("h2", { children: "Favorites" }) }), _jsxs("div", { className: "create-new-section", children: [_jsx("h2", { children: "Create New Camp" }), _jsx(NewCampForm, { token: token })] })] }));
};
export default Dashboard;
=======
export default function Dashboard() {
    return (_jsxs("div", { children: [_jsx("div", { className: 'dashboardnav' }), _jsx("div", { className: "dashboarddisplaybasedonnav" })] }));
}
>>>>>>> 1ebec6a (fix:setup with backend)
//# sourceMappingURL=Dashboard.js.map