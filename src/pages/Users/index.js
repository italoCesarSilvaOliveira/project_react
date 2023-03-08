import React from "react";
import { ContainerPage } from "../../components/Main.js"
import { Link } from "react-router-dom";
import Registro from "../../components/Registro.js";
const Page = () => {
    return (
        <ContainerPage>

            <div className="container">
                <div>
                    <h1 className="title">Multiplayer Mode</h1>
                </div>
                <Registro/>
                <Link to="/Main">
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