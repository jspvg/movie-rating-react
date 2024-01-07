import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const location = useLocation();
  const guestSessionId = localStorage.getItem('guest_session_id');

  return guestSessionId ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location }} />
  );
};

export default PrivateRoute;
