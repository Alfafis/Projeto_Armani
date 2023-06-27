import { useEffect, useState } from 'react';
import './style.css';
import api from '../../service/api';

function Student() {
  const [dados, setDados] = useState<SetStateAction<Array<string>>>([]);

  const getDados = () => {
    api()
      .get(`${import.meta.env.VITE_API_ROTA_URL}/usersModality/42`, {})
      .then((res) => setDados(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDados();

    console.log('dados', dados);
  }, [setDados]);

  return (
    <aside className="student">
      <h1>Gerenciar Alunos</h1>
      <form>
        <label htmlFor="">Nome</label>
        <input type="text" placeholder="" />
        <label htmlFor="">Modalidade</label>
        <input type="text" placeholder="" />
      </form>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Modalidade</th>
            <th>Faixa</th>
            <th>Data Pagamento</th>
            <th>Situação</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {dados.map(({ nome_aluno, status_aluno }, key) => (
              <td key={key}>{a}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </aside>
  );
}

function EditStudent() {
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

function ViewStudents() {
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

function AddStudent() {
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
