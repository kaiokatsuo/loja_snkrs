import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          Bigode Sneakers
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/produtos">Produtos</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
