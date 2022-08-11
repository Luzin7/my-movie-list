import React from "react";
import { useNavigate } from "react-router-dom";
import * as Path from "../utils/pathNames";

import "../styles/notFound.css";

function NotFound() {
  setTimeout(navigateBack, 4000);

  const navigate = useNavigate();

  function navigateBack() {
    navigate(Path.HOME);
  }

  return (
    <div className="notFound">
      <h1>404</h1>
      <p>Desculpe, a página que você está procurando não foi encontrada.</p>
    </div>
  );
}

export default NotFound;
