import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  return <nav>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/users">Users</NavLink></li>
      <li><NavLink to="/movies">Movies</NavLink></li>

    </ul>
  </nav>;
};

export default NavMenu;
