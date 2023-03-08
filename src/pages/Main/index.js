import React, { useState } from "react";
import { ContainerPage } from "../../components/Main.js"
import { useLocation } from "react-router-dom";
import Board from "../../components/Board";
import Titulo from "../../components/Titulo.js";

const Page = () => {
	const location = useLocation();
	let [player, setPlayer] = useState(location.state[0])

	function alteraNome(){
		
		if(player === location.state[0]){
			setPlayer(location.state[1])
			
		} else {
			setPlayer(location.state[0])
		}
	
	}
	
	return (
		<ContainerPage>
			
			<div className="container">
				<Titulo name={player} />
				<Board onClickPalito={alteraNome}/>
			</div>
		</ContainerPage>
	)
}

export default Page;