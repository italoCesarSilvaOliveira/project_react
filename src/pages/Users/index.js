import React from "react";
import { ContainerPage } from "../../components/Main.js"
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Registro from "../../components/Registro.js";


const Page = () => {
    const [players, setPlayers] = useState([])
    const [entraNomes, setEntraNomes] = useState(false)
    function handleRegistra(nomes) {
        let novosPlayers = players
        novosPlayers.push(nomes.player1)
        novosPlayers.push(nomes.player2)

        setPlayers(players)
        setEntraNomes(true)
    }

    if(entraNomes){
        return <Navigate to="../Main" state={players}/>
    }

    return (
        <ContainerPage>
            <div className="container">
                <div>
                    <h1 className="title">Multiplayer Mode</h1>
                </div>
                <Registro onAdicionarNomes={handleRegistra} />

            </div>


        </ContainerPage>
    )


}

export default Page;