import React from "react";
import Palito from "../images/Palito.png";
import PalitoSelecionado from "../images/Palito-selecionado.png";
import { useState } from "react";

function CompPalito(props) {
	let [tamanhoColunas, setTamanhoColunas] = useState(props.tamanhoColunas)

	function verificaVitoria(lista) {
		for (var i = 0; i < lista.length; i++) {

			if (lista[i] !== 0) {
				return false
			}
		}
		return true
	}

	function palitoClicado() {
		for (var i = props.y; i <= props.tamanhoColunas[props.x]; i++) {
			document.getElementById("img" + props.x + i).classList.add("esconder");
		}

		tamanhoColunas[props.x] = props.y - 1

		setTamanhoColunas(tamanhoColunas)

		let vitoria = verificaVitoria(tamanhoColunas)

		props.onClickPalito(vitoria)
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

	);
}

export default CompPalito;
