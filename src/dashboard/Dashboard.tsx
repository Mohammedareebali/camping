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
      
        <NewCampForm token={token} />
      </div>
    
  );
};

export default Dashboard;
