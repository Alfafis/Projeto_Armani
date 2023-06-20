import React, { useState } from "react";

const EditarAluno = () => {
  const [aluno, setAluno] = useState({
    modalidade: "",
    nome: "",
    dataNascimento: "",
    telefone: "",
    diaPagamento: "",
    valorMensalidade: "",
  });

  const {
    modalidade,
    nome,
    dataNascimento,
    telefone,
    diaPagamento,
    valorMensalidade,
  } = aluno;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAluno((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de envio do formulário de edição
  };

  return (
    <div>
      <h1>Editar Aluno</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="modalidade">Modalidade:</label>
          <input
            type="text"
            id="modalidade"
            name="modalidade"
            value={modalidade}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            value={dataNascimento}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={telefone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="diaPagamento">Dia do Pagamento:</label>
          <input
            type="number"
            id="diaPagamento"
            name="diaPagamento"
            value={diaPagamento}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="valorMensalidade">Valor da Mensalidade:</label>
          <input
            type="number"
            id="valorMensalidade"
            name="valorMensalidade"
            value={valorMensalidade}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditarAluno;
