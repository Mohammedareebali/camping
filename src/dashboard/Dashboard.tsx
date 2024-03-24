<<<<<<< HEAD
// Dashboard.tsx
import React, { useEffect, useState } from 'react';
import NewCampForm from "../newcamp/NewCampForm"; // import your CreateNewCamp component

interface UserProfile {
  name: string;
  email: string;
  // add more profile fields as needed
}

interface PostedItem {
  id: string;
  title: string;
  // add more fields as needed
}

interface FavoriteItem {
  id: string;
  title: string;
  // add more fields as needed
}
interface Props {
    token : string | null
  }
const Dashboard: React.FC<Props> = ({token}) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [postedItems, setPostedItems] = useState<PostedItem[]>([]);
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  // TODO: Implement data fetching logic here
  useEffect(() => {
    // Fetch and set profile, postedItems, favorites
  }, []);

  return (
    <div className="dashboard">
      <div className="profile-section">
        <h2>Profile</h2>
        {/* Display profile data here */}
      </div>

      <div className="posted-section">
        <h2>Posted Items</h2>
        {/* Display postedItems here */}
      </div>

      <div className="favorites-section">
        <h2>Favorites</h2>
        {/* Display favorites here */}
      </div>

      <div className="create-new-section">
        <h2>Create New Camp</h2>
        <NewCampForm token={token} />
      </div>
    </div>
  );
};

export default Dashboard;
=======
import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <div className='dashboardnav'></div>
      <div className="dashboarddisplaybasedonnav"></div>
    </div>
  )
}
>>>>>>> 1ebec6a (fix:setup with backend)
