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
    for (var i = props.y; i <= props.tamanhoColunas[props.x]; i++) {
      const imagem = document.getElementById("img" + props.x + i);
      console.log(imagem.src)
      imagem.src =
        "http://localhost:3000/static/media/Palito-selecionado.772469dbd037028ccecf.png";
    }
  }

  function palitoDeselecionado() {
    for (var i = props.y; i <= props.tamanhoColunas[props.x]; i++) {
      document.getElementById("img" + props.x + i).src =
        "/static/media/Palito.9c353d5a6ec618b8e100.png";
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
