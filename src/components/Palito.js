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

	function palitoSelecionado() {
		
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
