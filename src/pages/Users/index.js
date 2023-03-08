import React from "react";
import { ContainerPage } from "../../components/Main.js"
import { Link } from "react-router-dom";
import { useState } from "react";
import { History } from "@remix-run/router";
import Registro from "../../components/Registro.js";


const Page = () => {
    const [players, setPlayers] = useState([])

    function handleRegistra(nomes) {
        let novosPlayers = players
        novosPlayers.push(nomes.player1)
        novosPlayers.push(nomes.player2)

        setPlayers(players)
        
    }

    return (
        <ContainerPage>
            <div className="container">
                <div>
                    <h1 className="title">Multiplayer Mode</h1>
                </div>
                <Registro onAdicionarNomes={handleRegistra} />
                <Link to="/Main" state={players}>
                    <div>
                        <button className="button">
                            Jogar
                        </button>
                    </div>
                </Link>

            </div>


        </ContainerPage>
    )


}

export default Page;