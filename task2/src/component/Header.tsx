
import { NavLink } from "react-router";
import "../css/Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">

        <div className="logo">
          Fashion<span>Hub</span>
        </div>

        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/products">
            Products
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>
        </div>

      </nav>
    </header>
  );
}

export default Header;