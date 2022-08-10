import React from "react";
import { NavLink } from "react-router-dom";

import * as Path from "../utils/pathNames";
import { USER_NAME } from "./../utils/getAuthInfos";
import "../scripts/changeColorHeader";

import "../styles/header/header.css";
import "../styles/header/headerContent.css";

function Header() {
  function logout() {
    const origin = window.location.origin;
    var confirmLogout = window.confirm("Você tem certeza que deseja sair?");
    if (confirmLogout) {
      localStorage.clear();
      window.location.href = origin + Path.REGISTER;
      window.location.reload();
    } else {
      window.alert("Você desistiu de desconectar, isso é bom!");
    }
  }

  return (
    <header className="header">
      <div className="header__content">
        <ul className="header__links">
          <li className="header__link-wrapper">
            <NavLink to={"user"} className="header__link">
              {USER_NAME()}
            </NavLink>
          </li>
          <li className="header__link-wrapper">
            <NavLink to={Path.MOVIES} className="header__link">
              Filmes
            </NavLink>
          </li>
          <li className="header__link-wrapper">
            {/* <NavLink to={"series"} className="header__link">
              Séries
            </NavLink> */}
          </li>
          {USER_NAME() !== null ? (
            <li className="header__link-wrapper">
              <span className="header__link" onClick={logout}>
                Sair
              </span>
            </li>
          ) : null}
        </ul>
      </div>
    </header>
  );
}

export default Header;
