import { jsx as _jsx } from "react/jsx-runtime";
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
    return (_jsx("div", { className: "dashboard", children: _jsx(NewCampForm, { token: token }) }));
};
export default Dashboard;
//# sourceMappingURL=Dashboard.js.map