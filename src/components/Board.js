import React from "react";
import Palito from "../components/Palito";

function Board({onClickPalito}) {

  let tamanhoColunas = [1, 2, 3, 4, 3, 2, 1];

  function validaClique(vitoria){
    
    onClickPalito(vitoria)
  }

  return (
    <div className="container-main">
      <table>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Palito onClickPalito={validaClique} tamanhoColunas={tamanhoColunas} x="3" y="4" />
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <Palito onClickPalito={validaClique} tamanhoColunas={tamanhoColunas} x="2" y="3" />
            </td>
            <td>
              <Palito onClickPalito={validaClique} tamanhoColunas={tamanhoColunas} x="3" y="3" />
            </td>
            <td>
              <Palito onClickPalito={validaClique} tamanhoColunas={tamanhoColunas} x="4" y="3" />
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Palito onClickPalito={validaClique} tamanhoColunas={tamanhoColunas} x="1" y="2" />
            </td>
            <td>
              <Palito onClickPalito={validaClique} tamanhoColunas={tamanhoColunas} x="2" y="2" />
            </td>
            <td>
              <Palito onClickPalito={validaClique} tamanhoColunas={tamanhoColunas} x="3" y="2" />
            </td>
            <td>
              <Palito onClickPalito={validaClique} tamanhoColunas={tamanhoColunas} x="4" y="2" />
            </td>
            <td>
              <Palito onClickPalito={validaClique} tamanhoColunas={tamanhoColunas} x="5" y="2" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Palito onClickPalito={validaClique} tamanhoColunas={tamanhoColunas} x="0" y="1" />
            </td>
            <td>
              <Palito onClickPalito={validaClique} tamanhoColunas={tamanhoColunas} x="1" y="1" />
            </td>
            <td>
              <Palito onClickPalito={validaClique} tamanhoColunas={tamanhoColunas} x="2" y="1" />
            </td>
            <td>
              <Palito onClickPalito={validaClique} tamanhoColunas={tamanhoColunas} x="3" y="1" />
            </td>
            <td>
              <Palito onClickPalito={validaClique} tamanhoColunas={tamanhoColunas} x="4" y="1" />
            </td>
            <td>
              <Palito onClickPalito={validaClique} tamanhoColunas={tamanhoColunas} x="5" y="1" />
            </td>
            <td>
              <Palito onClickPalito={validaClique} tamanhoColunas={tamanhoColunas} x="6" y="1" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  );

}

export default Board;
