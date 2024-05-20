import {routes} from "../../consts/routes";
import {Link} from "react-router-dom";
import React from "react";
import './headerStyle.css'

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          {routes.map((route) => (
            <li key={route.path} className="nav-item">
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
