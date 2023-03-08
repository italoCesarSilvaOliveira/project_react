import React from "react";
import { ContainerPage } from "../../components/Main.js"
import Board from "../../components/Board";
import Registro from "../../components/Registro.js";
import Titulo from "../../components/Titulo.js";

const Page = () => {
	return (
		<ContainerPage>
			<div className="container">
				<Titulo />
				<Board />
			</div>
		</ContainerPage>
	)
}

export default Page;