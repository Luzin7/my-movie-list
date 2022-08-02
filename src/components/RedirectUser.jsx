import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN } from "../utils/getAuthInfos";
import * as Path from "../utils/pathNames";

function RedirectUser() {
  const counter = setInterval(counterUpdate, 100);
  const [value, setValue] = useState(counter);
  const navigate = useNavigate();

  function counterUpdate() {
    setValue(value + getRandomValue(1, 10));

    clearInterval(counter);
  }

  function getRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function navigateBack() {
    if (TOKEN() !== "true") {
      navigate(Path.REGISTER);
    } else if (TOKEN() === "true") {
      navigate(Path.MOVIES);
    }
  }

  if (value > 99) {
    navigateBack();
  }

  return (
    <div className="check__auth notFound">
      <h1>Aguarde um pouco, estamos te redirecionando para o local correto.</h1>
      <progress id="progress__bar" max="100" value={value} />
    </div>
  );
}

export default RedirectUser;
