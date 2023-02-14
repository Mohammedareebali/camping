import SignUp from './auth-component/SignUp';
import React, { useState } from 'react';
const jwt = require('jsonwebtoken');

const App: React.FC = () => {
  // Define state variable for the JWT
  const [token, setToken] = useState<string | null>(null);

  // Decode the JWT to get the user ID
  const userId = token ? jwt.verify(token, 'secret_key').userId : null;

  return (
    <div>
      {!userId && <SignUp setToken={setToken} />}
      {userId && <p>Welcome, user with ID: {userId}</p>}
    </div>
  );
};

export default App;
