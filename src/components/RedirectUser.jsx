import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN } from "../utils/getAuthInfos";
import * as Path from "../utils/pathNames";
import "../styles/redirect.css";

function RedirectUser() {
  const [value, setValue] = useState(0);
  const counter = setInterval(counterUpdate, 100);

  function counterUpdate() {
    if (value < 99) {
      setValue(value + getRandomValue(1, 15));
    } else if (value >= 100) {
      clearInterval(counter);
    }

    clearInterval(counter);
  }

  function getRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  const navigate = useNavigate();

  function navigateBack() {
    if (TOKEN() !== "true") {
      navigate(Path.REGISTER);
    } else if (TOKEN() === "true") {
      navigate(Path.MOVIES);
    }
  }

  if (value >= 100) {
    navigateBack();
  }

  return (
    <div className="check__auth">
      <h1 className="auth__title">
        Aguarde um pouco, estamos te redirecionando para o local correto.
      </h1>
      <progress
        className="rating__bar"
        id="auth__bar"
        max="100"
        value={value}
      />
      <p></p>
    </div>
  );
}

export default RedirectUser;
