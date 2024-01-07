import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../store/AuthProvider';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  if(!authContext) {
    console.error("Context is null");
    return null;
  }
  const { isAuthenticated } = authContext;
  return (
    <nav>
      {isAuthenticated && (
        <div className="nav-left">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/rated">Rated</NavLink>
        </div>
      )}

      <div className="nav-right">
        <NavLink to="/auth">Auth</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
