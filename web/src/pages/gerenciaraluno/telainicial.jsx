import React from "react";
import "../gerenciaraluno/telainicial.css";

function Telainicial() {
  const totalAlunos = 38; // BUSCAR DA BASE DE DADOS SELECT COUNT(*) AS total_alunos FROM aluno;
  const alunosAtivos = 28; //SELECT COUNT(*) AS total_alunos_ativos FROM ALUNO WHERE situacao = 'Ativo';
  const alunosInativos = 8; //SELECT COUNT(*) AS total_alunos_ativos FROM ALUNO WHERE situacao = 'Inativo';
  const kickboxingAlunos = 20; //SELECT COUNT(*) AS total_alunos_ativos FROM ALUNO WHERE modalidade = 'kickboxing';
  const jiuJitsuAlunos = 8; //SELECT COUNT(*) AS total_alunos_ativos FROM ALUNO WHERE modalidade = 'JIUJITSU';

  return (
    <div className="telainicial-frame">
      <table className="table-aluno">
        <thead>
          <tr>
            <th className="label-aluno">TOTAL DE ALUNOS</th>
            <td className="value-aluno">{totalAlunos}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="label-aluno">ALUNOS INATIVOS</td>
            <td className="value-aluno">{alunosInativos}</td>
          </tr>
          <tr>
            <td className="label-aluno">ALUNOS ATIVOS</td>
            <td className="value-aluno">{alunosAtivos}</td>
          </tr>
          <tr>
            <td className="label-aluno">MODALIDADE</td>
            <td>
              <table>
                <tr>
                  <td className="sub-label-modalidade">
                    {kickboxingAlunos} KICKBOXING
                  </td>
                </tr>
                <tr>
                  <td className="sub-label-modalidade">
                    {jiuJitsuAlunos} JIU-JÍTSU
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Telainicial;
