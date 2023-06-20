import React, { useState } from "react";
import "./visualizaraluno.css";

function VisualizarAluno() {
  const [nome, setNome] = useState("");
  const [modalidade, setModalidade] = useState("");
  const [faixa, setFaixa] = useState("");
  const [resultado, setResultado] = useState([]);

  const handlePesquisar = () => {
    // LÓGICA
    setResultado([{}]);
  };

  return (
    <div className="container-visualizar">
      <div className="visualizar-frame">
        <div className="cadastrar">
          <button className="cadastrar-button">Cadastrar</button>
          <p>Pesquisar aluno</p>
        </div>
        <table>
          <tbody>
            <tr>
              <td>NOME:</td>
              <td>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </td>
              <td>MODALIDADE:</td>
              <td>
                <input
                  type="text"
                  value={modalidade}
                  onChange={(e) => setModalidade(e.target.value)}
                />
              </td>
              <td>FAIXA:</td>
              <td>
                <input
                  type="text"
                  value={faixa}
                  onChange={(e) => setFaixa(e.target.value)}
                />
              </td>
              <td>
                <button onClick={handlePesquisar}>Pesquisar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="resultado-container">
          <p>Resultado da pesquisa</p>
        </div>

        <div className="resultado-frame">
          <table>
            <tbody>
              <tr>
                <td>NOME</td>
                <td>MODALIDADE</td>
                <td>FAIXA</td>
              </tr>
              {/* LÓGICA */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VisualizarAluno;
