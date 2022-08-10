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
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ 0-9_-]{4,16}$/;

    if (!validateUserName.test(name) && name === "*") {
      localStorage.setItem("userName", "🤎");
      localStorage.setItem("token", "eurt");
      navigate(Path.HOME);
    }

    if (!validateUserName.test(name) && name !== "*") {
      alert(
        "Nome inválido! É necessário que tenha pelo menos 4 dígitos e no máximo 16."
      );
    } else if (validateUserName.test(name)) {
      localStorage.setItem("userName", name);
      localStorage.setItem("token", "true");
      navigate(Path.HOME);
    }
  }

  return (
    <main className="form__register">
      <form className="form">
        {name === "" ? (
          <>
            <h1 className="form__title">Crie seu nome de usuário</h1>
            <p className="form__title-sec">É rapidinho, tá?</p>
          </>
        ) : (
          <>
            <h1 className="form__title">Olá, {name}!</h1>
            <p className="form__title-sec">Que legal você por aqui.</p>
          </>
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
