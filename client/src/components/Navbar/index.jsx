import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/" onClick={() => navigate("/")}>
          <img
            className="navbar__logo"
            src="https://dummyimage.com/150x50/000/fff"
            alt="Logo Text"
          />
        </Link>
      </div>
      <div className="navbar__right">
        <Link to="/registration">
          <button className="navbar__btn">Sign Up Now</button>
        </Link>
        <Link to="/login">
          <button className="navbar__btn">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
