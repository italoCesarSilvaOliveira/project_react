import React from "react";
import { ContainerPage } from "../../components/Main.js"
import Board from "../../components/Board";
import Registro from "../../components/Registro.js";

const Page = () => {
	return (
		<ContainerPage>
			<div className="container">
				<h1 className="title">Vez de {} </h1>
				<Board />
			</div>
		</ContainerPage>
	)
}

export default Page;