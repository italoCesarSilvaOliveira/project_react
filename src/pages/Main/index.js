import React from "react";
import { ContainerPage } from "../../components/Main.js"
import Board from "../../components/Board";

const Page = () => {
	return (
		<ContainerPage>
			<div className="container">
				<h1 className="title"> Multiplayer </h1>
				<Board />
			</div>
		</ContainerPage>
	)
}

export default Page;