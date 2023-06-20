import React from "react";
import "./gerenciaraluno.css";

function GerenciarAluno() {
  return (
    <div className="cadastro-container">
      <div className="cadastro-frame">
        <form className="cadastro-form">
          <p className="cadastro-title">Cadastrar aluno</p>
          <div className="cadastro-group">
            <label htmlFor="nome" className="cadastro-label">
              Nome: ⠀
            </label>
            <input type="text" id="nome" className="cadastro-input" />
          </div>
          <div className="cadastro-group">
            <label htmlFor="telefone" className="cadastro-label">
              Telefone: ⠀
            </label>
            <input type="text" id="telefone" className="cadastro-input" />
          </div>
          <div className="cadastro-group">
            <label htmlFor="modalidade" className="cadastro-label">
              Modalidade: ⠀
            </label>
            <input type="text" id="modalidade" className="cadastro-input" />
          </div>
          <div className="cadastro-group">
            <label htmlFor="faixa" className="cadastro-label">
              Faixa: ⠀
            </label>
            <input type="text" id="faixa" className="cadastro-input" />
          </div>
          <div className="cadastro-group">
            <label htmlFor="dataNascimento" className="cadastro-label">
              Data de Nascimento: ⠀
            </label>
            <input type="date" id="dataNascimento" className="cadastro-input" />
          </div>
          <button type="submit" className="cadastro-button">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}

export default GerenciarAluno;
