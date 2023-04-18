import SignUp from './auth-component/SignUp';
import Login from './auth-component/Login';
import Home from './Home'
import React, { useState, useEffect } from 'react';
import { Route, Routes,useNavigate } from 'react-router-dom';

import { jwtVerify } from 'jose';
import Main from './components/Main';
import  Searchpage  from './seachpage/searchpage' ;
import CampgroundDetails from './seachpage/CampgroundDetails';
import NewCampForm from './newcamp/NewCampForm';
import PrivateRoute from './privateroute/PrivateRoute';

const App: React.FC = () => {
  // Define state variable for the JWT
 // Retrieve the JWT from localStorage
 const [token, setToken] = useState<string | null>(() => {
  const storedToken = localStorage.getItem('jwt');
  if (storedToken) {
    console.log(storedToken)
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
      
      setUserId(null)
      setToken(null);
    }
  };

  useEffect(() => {
    verifyToken();
    // Store the JWT in localStorage whenever it changes
    if (token) {
      localStorage.setItem('jwt', token);
      localStorage.setItem('isAuthenticated', 'true');
      
    } else {
      localStorage.removeItem('jwt');
      localStorage.removeItem('isAuthenticated')
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
        
          
          <Route path="/signup" element={<SignUp setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/main" element = {<Main/>}/>
        <Route path='/search/*' element = {<Searchpage/>}/>
        <Route path="/campgrounds/:campgroundId" element={<CampgroundDetails token = {token}/>} />


          <Route path='/createcamp' element = {<PrivateRoute>
            <NewCampForm token = {token}/></PrivateRoute>}  />
      
      </Routes>
      
      
    </>
  
  )};

export default App;
