import SignUp from './auth-component/SignUp';
import React, { useState } from 'react';
import {  Route, Routes, } from 'react-router-dom';
import Login from './auth-component/Login';
const jwt = require('jsonwebtoken');

const App: React.FC = () => {
  // Define state variable for the JWT
  const [token, setToken] = useState<string | null>(null);

  // Decode the JWT to get the user ID
  const userId = token ? jwt.verify(token, 'secret_key').userId : null;

  return (
    <div>
      <Routes>
    {!userId ? <Route  path="/" element={<SignUp setToken={setToken}/>} /> : <p>Welcome, user with ID: {userId}</p>}
    <Route path="/login" element={<Login setToken={setToken}/>} />
    </Routes>
      {!userId}
      
      {userId && <p>Welcome, user with ID: {userId}</p>}

    </div>
    
  );
};

export default App;
