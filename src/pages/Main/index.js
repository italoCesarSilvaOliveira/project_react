import React from "react";
import { ContainerPage } from "../../components/Main.js"
import Palito from "../../images/Palito.png"

const Page = () => {
	return (
		<ContainerPage>
			<div className="container">
				<h1 className="title"> Multiplayer </h1>
				<div className="container-main">
					<table>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td><img id="img34" src={Palito} width="25" height="100" alt="" /></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td><img id="img23" src={Palito} width="25" height="100" alt="" /></td>
							<td><img id="img33" src={Palito} width="25" height="100" alt="" /></td>
							<td><img id="img43" src={Palito} width="25" height="100" alt="" /></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td><img id="img12" src={Palito} width="25" height="100" alt="" /></td>
							<td><img id="img22" src={Palito} width="25" height="100" alt="" /></td>
							<td><img id="img32" src={Palito} width="25" height="100" alt="" /></td>
							<td><img id="img42" src={Palito} width="25" height="100" alt="" /></td>
							<td><img id="img52" src={Palito} width="25" height="100" alt="" /></td>
							<td></td>
						</tr>
						<tr>
							<td><img id="img01" src={Palito} width="25" height="100" alt="" /></td>
							<td><img id="img11" src={Palito} width="25" height="100" alt="" /></td>
							<td><img id="img21" src={Palito} width="25" height="100" alt="" /></td>
							<td><img id="img31" src={Palito} width="25" height="100" alt="" /></td>
							<td><img id="img41" src={Palito} width="25" height="100" alt="" /></td>
							<td><img id="img51" src={Palito} width="25" height="100" alt="" /></td>
							<td><img id="img61" src={Palito} width="25" height="100" alt="" /></td>
						</tr>
					</table>
				</div>
			</div>
		</ContainerPage>
	)
}

export default Page;