import React from "react";

class Registro extends React.Component{

    constructor(){
        super()
        this.player1 = ''
        this.player2 = ''
    }

    
    render(){
        return (
            <form>
                <div>
                    <span
                        id="basic-addon1">Jogador 1</span>
                    <input type="text" name="player1" id="player1"
                        placeholder="Username" aria-label="Username" />
                </div>
                <div>
                    <span
                        id="basic-addon1">Jogador 2</span>
                    <input type="text" name="player2" id="player2"
                        placeholder="Username" aria-label="Username" />
                </div>

            </form>
        )
    }
    
}

export default Registro;