import React from 'react';
import { Navigate } from 'react-router-dom';

interface IPrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const token = localStorage.getItem('token');

  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;




