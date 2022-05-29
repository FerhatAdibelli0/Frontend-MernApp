import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact> All Users</NavLink>
      </li>
      <li>
        <NavLink to="/places/new"> My Places</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places"> Add Place</NavLink>
      </li>
      <li>
        <NavLink to="/auth"> Auth</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
