import React from "react";
import Palito from "../images/Palito.png";
import PalitoSelecionado from "../images/Palito-selecionado.png";
import { ContainerPage } from "./Main";


function CompPalito(props) {
	function palitoClicado() {
		for (var i = props.y; i <= props.tamanhoColunas[props.x]; i++) {
			document.getElementById("img" + props.x + i).src = "images/Palito.png";
			document.getElementById("img" + props.x + i).classList.add("esconder");
		}
	}

<<<<<<< HEAD
	function palitoSelecionado() {
		console.log(props.tamanhoColunas[0]);
		for (var i = props.y; i <= props.tamanhoColunas[props.x]; i++) {
			const imagem = document.getElementById("img" + props.x + i);
			imagem.setAttribute('src', PalitoSelecionado);
		}
	}

	function palitoDeselecionado() {
		for (var i = props.y; i <= props.tamanhoColunas[props.x]; i++) {
			document.getElementById("img" + props.x + i).setAttribute('src', Palito)
		}
	}
=======
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
>>>>>>> 60cf532bb88f5ba5eb0a6ae4edf9f84dba74af47

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

export default CompPalito;
