import React from "react";
import { useNavigate } from "react-router-dom";
import * as Path from "../utils/pathNames";

import "../styles/notFound.css";

function NotFound() {
  setTimeout(navigateBack, 5000);

  const navigate = useNavigate();

  function navigateBack() {
    navigate(Path.HOME);
  }

  return (
    <div className="notFound">
      <h1>Página não encontrada :o</h1>
      <p>Vamos te colocar no caminho certo em 5 segundos :D.</p>
    </div>
  );
}

export default NotFound;
