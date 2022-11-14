import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav-bar">
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="about" className="nav-item">
        About
      </Link>
      <Link to="cottage" className="nav-item">
        Cottage
      </Link>
      <Link to="meet" className="nav-item">
        Meet the Kids
      </Link>
      <Link to="stretch" className="nav-item">
        Stretch Club
      </Link>
    </div>
  );
};
export default Nav;
