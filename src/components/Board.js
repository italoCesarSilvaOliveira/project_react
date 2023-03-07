import React from "react";
import Palito from "../components/Palito";


class Board extends React.Component {
  constructor() {
    super();
    this.tamanhoColunas = [1, 2, 3, 4, 3, 2, 1];
  }

  render() {
    return (
      <table>
        <div className="container-main">
          <table>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Palito  tamanhoColunas={this.tamanhoColunas} x="3" y="4" />
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <Palito tamanhoColunas={this.tamanhoColunas} x="2" y="3" />
              </td>
              <td>
                <Palito tamanhoColunas={this.tamanhoColunas} x="3" y="3" />
              </td>
              <td>
                <Palito tamanhoColunas={this.tamanhoColunas} x="4" y="3" />
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Palito tamanhoColunas={this.tamanhoColunas} x="1" y="2" />
              </td>
              <td>
                <Palito tamanhoColunas={this.tamanhoColunas} x="2" y="2" />
              </td>
              <td>
                <Palito tamanhoColunas={this.tamanhoColunas} x="3" y="2" />
              </td>
              <td>
                <Palito tamanhoColunas={this.tamanhoColunas} x="4" y="2" />
              </td>
              <td>
                <Palito tamanhoColunas={this.tamanhoColunas} x="5" y="2" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Palito tamanhoColunas={this.tamanhoColunas} x="0" y="1" />
              </td>
              <td>
                <Palito tamanhoColunas={this.tamanhoColunas} x="1" y="1" />
              </td>
              <td>
                <Palito tamanhoColunas={this.tamanhoColunas} x="2" y="1" />
              </td>
              <td>
                <Palito tamanhoColunas={this.tamanhoColunas} x="3" y="1" />
              </td>
              <td>
                <Palito tamanhoColunas={this.tamanhoColunas} x="4" y="1" />
              </td>
              <td>
                <Palito tamanhoColunas={this.tamanhoColunas} x="5" y="1" />
              </td>
              <td>
                <Palito tamanhoColunas={this.tamanhoColunas} x="6" y="1" />
              </td>
            </tr>
          </table>
        </div>
      </table>
    );
  }
}

export default Board;
