import SignUp from './auth-component/SignUp';
import Login from './auth-component/Login';
import Home from './Home'
import React, { useState, useEffect } from 'react';
import { Route, Routes,useNavigate } from 'react-router-dom';

import { jwtVerify } from 'jose';
import Main from './components/Main';

const App: React.FC = () => {
  // Define state variable for the JWT
 // Retrieve the JWT from localStorage
 const [token, setToken] = useState<string | null>(() => {
  const storedToken = localStorage.getItem('jwt');
  if (storedToken) {
    return storedToken;
  }
  return null;
});
//usenavigate
const navigate = useNavigate();
  // Define state variable for the user ID
  const [userId, setUserId] = useState<any>(null);

  // Decode the JWT to get the user ID
  const verifyToken = async () => {
    try {
      if (token) {
        const secret = new TextEncoder().encode('secret_key');
        const { payload } = await jwtVerify(token, secret);
        console.log(payload);
        setUserId(payload.id);
      }
    } catch (err) {
      console.error(err);
      setUserId(null);
    }
  };

  useEffect(() => {
    verifyToken();
    // Store the JWT in localStorage whenever it changes
    if (token) {
      localStorage.setItem('jwt', token);
    } else {
      localStorage.removeItem('jwt');
    }
  }, [token]);
  useEffect(() => {
    if (userId) {
      navigate('/home');
    }
  }, [userId]);
  return (
    <>
      <Routes>
        {!userId ? (
          <>
          <Route path="/signup" element={<SignUp setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/main" element = {<Main/>}/>
</>
        ) : (
          <Route path='/home' element={<Home token = {token} setUserId = {setUserId} userId = {userId} setToken = {setToken} />} />
          
        )}
      </Routes>
      
      
    </>
  );
};

export default App;
