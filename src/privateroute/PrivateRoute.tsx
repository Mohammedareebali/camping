<<<<<<< HEAD
import React, { FC } from 'react';
import { Route,  Navigate} from 'react-router-dom';

interface PrivateRouteProps  {
  children:any
}

const PrivateRoute: FC<PrivateRouteProps> = ({  children }) => {
  
  const auth = localStorage.getItem('isAuthenticated')

  return auth ? children : <Navigate to= '/login' />
}
export default PrivateRoute;
=======
import React, { FC } from 'react';
import { Route,  Navigate} from 'react-router-dom';

interface PrivateRouteProps  {
  children:any
}

const PrivateRoute: FC<PrivateRouteProps> = ({  children }) => {
  
  const auth = localStorage.getItem('isAuthenticated')

  return auth ? children : <Navigate to= '/login' />
}
export default PrivateRoute;
>>>>>>> 1ebec6a (fix:setup with backend)
