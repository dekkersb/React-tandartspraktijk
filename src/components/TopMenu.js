import React from 'react';
import {NavLink} from "react-router-dom";

function TopMenu() {
  return (
    <nav>
      <div className="nav-container">
        <h4>De Tandenborstel</h4>

        <ul>

          <NavLink to = "/" exact activeClassName = "active-link">
          <li>
            Home
          </li>
          </NavLink>

          <NavLink to = "/gaatjes" exact activeClassName = "active-link">
          <li>
            Gaatjes
          </li>
          </NavLink>

          <NavLink to = "/afspraak-maken" exact activeClassName = "active-link">
          <li>
            Afspraak maken
          </li>
          </NavLink>

          <NavLink to = "/tanden-bleken" exact activeClassName = "active-link">
          <li>
            Tanden bleken
          </li>
          </NavLink>

        </ul>
      </div>
    </nav>
  );
}

export default TopMenu;