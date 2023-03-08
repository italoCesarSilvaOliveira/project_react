import React from "react";
import { ContainerPage } from "../../components/Main";
import { IoLogoGameControllerB } from 'react-icons/io';
import { Link } from "react-router-dom";

const Page = () => {

	return (
		<ContainerPage>
			<div className="container">
				<h1 className="title"> Jogo do Nim </h1>
				<Link to="/Users">
					<button className="button">
						<IoLogoGameControllerB size={40} color="#333333" />
					</button>
				</Link>
			</div>
		</ContainerPage>
	);
}

export default Page;