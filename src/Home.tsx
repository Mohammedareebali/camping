import React from 'react';
import {  useNavigate } from 'react-router-dom';
interface Props {
  setUserId: any,
  token: any,
  setToken:any,
  userId:any,
}

const Home: React.FC<Props> = ({ userId,setUserId, token ,setToken}) => {
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
      } else {
        console.error('Failed to log out');
      }
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  return (
    <div>
      <h1>Welcome, user with ID: {userId}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
