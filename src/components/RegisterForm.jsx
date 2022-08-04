import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Path from "../utils/pathNames";

import "../styles/register/register.css";
import "../styles/register/form.css";

function RegisterForm() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleChange() {
    let nameInput = document.querySelector(".name__input");
    let userName = nameInput.value;

    return userName;
  }

  function registerUser(e) {
    e.preventDefault();
    let validateUserName =
      /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){2,18}[a-zA-Z0-9]$/;

    if (!validateUserName.test(name) && name === "*") {
      localStorage.setItem("userName", "Master");
      localStorage.setItem("token", "eurt");
      navigate(Path.HOME);
    } else if (validateUserName.test(name)) {
      localStorage.setItem("userName", name);
      localStorage.setItem("token", "true");
      navigate(Path.HOME);
    } else if (!validateUserName.test(name)) {
      alert(
        "Nome inválido! É necessário que o nome tenha pelo menos 4 dígitos e tenha apenas letras e/ou números."
      );
    }
  }

  return (
    <main className="form__register">
      <form className="form">
        {name === "" ? (
          <h1 className="form__title">Como se chama?</h1>
        ) : (
          <h1 className="form__title">Olá, {name}!</h1>
        )}
        <input
          className="input name__input"
          type="text"
          placeholder="Nome"
          onChange={() => setName(handleChange)}
        />
        <button
          className="button__register"
          type="submit"
          onClick={registerUser}
        >
          Entrar
        </button>
      </form>
    </main>
  );
}

export default RegisterForm;
