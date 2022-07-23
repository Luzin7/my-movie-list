import React from "react";
import { NavLink } from "react-router-dom";

import * as Path from "../utils/pathNames";
import "../styles/header/header.css";
import "../styles/header/headerContent.css";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <ul className="header__links">
          <li className="header__link-wrapper">
            <NavLink to={Path.HOME} className="header__link">
              Início
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
