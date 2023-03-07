import React from "react";
import Palito from "../images/Palito.png";
import { ContainerPage } from "./Main";
import PalitoSelecionado from "../images/Palito-selecionado.png";

function CompPalito(props) {
  function palitoClicado() {
    for (var i = props.y; i <= props.tamanhoColunas[props.x]; i++) {
      document.getElementById("img" + props.x + i).src = "images/Palito.png";
      document.getElementById("img" + props.x + i).classList.add("esconder");
    }
  }

  function palitoSelecionado() {
    console.log(props.tamanhoColunas[0]);
    for (var i = props.y; i <= props.tamanhoColunas[props.x]; i++) {
      const imagem = document.getElementById("img" + props.x + i);
      console.log(imagem);
      imagem.src =
        "http://localhost:3000/static/media/Palito-selecionado.50ea419fc01f4da72750.png";
    }
  }

  function palitoDeselecionado() {
    for (var i = props.y; i <= props.tamanhoColunas[props.x]; i++) {
      document.getElementById("img" + props.x + i).src =
        "http://localhost:3000/static/media/Palito.7b52fe59aa4456e9f8df.png";
    }
  }

  return (
    <ContainerPage>
      <img
        className="imagem"
        src={Palito}
        alt="Palito"
        width="25px"
        height="100px"
        onMouseOver={palitoSelecionado}
        onMouseOut={palitoDeselecionado}
        onClick={palitoClicado}
        id={"img" + props.x + props.y}
      />
    </ContainerPage>
  );
}

// function CompPalito() {
//   return (
//     <ContainerPage>
//       <img
//         className="imagem"
//         src={Palito}
//         alt="Palito"
//         width="25px"
//         height="100px"
//       />
//     </ContainerPage>
//   );
// }

export default CompPalito;
