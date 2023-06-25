import './style.css';

function EditAluno() {
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
}

function telaInicial() {
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

function VisualizarAluno() {
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

function Student() {
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

export default Student;
