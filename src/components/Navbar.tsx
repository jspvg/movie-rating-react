import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/rated">Rated</NavLink>
      </div>
      <div className="nav-right">
        <NavLink to="/auth">Auth</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
