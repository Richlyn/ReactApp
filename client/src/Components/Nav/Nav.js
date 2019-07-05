import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <Menu>
          <NavLink className="menu-item" to="/">
            Home
          </NavLink>
          <NavLink className="menu-item" to="/Cities">
            Cities
          </NavLink>

          <NavLink className="menu-item" to="/Itineraries">
            Itineraries
          </NavLink>

          <NavLink className="menu-item" to="/BecomeAMember">
            Become a Member
          </NavLink>

          <NavLink className="menu-item" to="/Login">
            Log In
          </NavLink>

          <NavLink className="menu-item" to="/vue">
            Vue
          </NavLink>

          <NavLink className="menu-item" to="/node">
            Node
          </NavLink>
        </Menu>
      </div>
    );
  }
}

export default Nav;
