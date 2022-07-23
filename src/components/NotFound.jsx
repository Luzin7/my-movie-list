import React from "react";
import { Navigate } from "react-router";
import * as Path from "../utils/pathNames";

function NotFound() {
  return (
    <div>
      <Navigate to={Path.HOME}>
        <h1>Página não encontrada :c</h1>
      </Navigate>
    </div>
  );
}

export default NotFound;
