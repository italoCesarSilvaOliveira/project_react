import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ContainerPage } from "../../components/Main";
import { useLocation } from "react-router-dom";

const Page = () => {
	const location = useLocation();
	const player = useState(location.state[0])

	return (
		<ContainerPage>
			<div className="container">
				<h1 className="title">{player[0]} Venceu!</h1>
				<Link to="/">
					<button className="button">
						Novos Jogadores
					</button>
				</Link>
				<Link to="../Main" state={location.state[1]}>
					<button className="button">
						Jogar Novamente
					</button>
				</Link>
			</div>
		</ContainerPage>
	);
}

export default Page;