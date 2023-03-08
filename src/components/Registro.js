import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formulario } from "./Main.js";
import { RegistroCSS } from "./RegistroCSS";

function Registro() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const handleSubmit = (event) => {
    alert("A name was submitted: " + player1 + " and " + player2);

    event.preventDefault();
  };

  return (
    <RegistroCSS>
      <div className="formulario">
        <form onSubmit={handleSubmit} className="form">
          <label className="label_">
            Name 1:
            <input type="text" onChange={(e) => setPlayer1(e.target.value)} />
          </label>
          <label className="label_">
            Name 2:
            <input type="text" onChange={(e) => setPlayer2(e.target.value)} />
          </label>

          <input className="button" type="submit" value="Registrar Nomes" />
        </form>
      </div>
    </RegistroCSS>
  );
}

export default Registro;
