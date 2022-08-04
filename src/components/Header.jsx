import React from "react";
import { NavLink } from "react-router-dom";

import * as Path from "../utils/pathNames";
import { USER_NAME } from "./../utils/getAuthInfos";
import "../scripts/changeColorHeader";

import "../styles/header/header.css";
import "../styles/header/headerContent.css";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <ul className="header__links">
          <li className="header__link-wrapper">
            {/* <NavLink to={Path.HOME} className="header__link">
              Início
            </NavLink> */}
            <NavLink to={`/${USER_NAME()}`} className="header__link">
              {USER_NAME()}
            </NavLink>
            <NavLink to={Path.MOVIES} className="header__link">
              Filmes
            </NavLink>
            <NavLink to={"/series"} className="header__link">
              Séries
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
