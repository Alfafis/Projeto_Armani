import {
  InputHTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../service/api';
import { Button } from '../../components/button';
import {
  MdEdit,
  MdDeblur,
  MdRestoreFromTrash,
  MdSupervisedUserCircle,
} from 'react-icons/md';
import './style.css';

interface IStudent extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  nome: string;
  modalidade: string;
  grau_faixa: string;
  situacao?: string;
  dia_semana?: string;
  horario?: string;
}

function Student() {
  const [dados, setDados] = useState<SetStateAction<any>>([]);
  const [studentEdit, setStudentEdit] = useState<SetStateAction<any>>([]);
  const [newNome, setNewNome] = useState<string>('');
  const [newModalidade, setNewModalidade] = useState<string>('');
  const [newFaixa, setNewFaixa] = useState<string>('');
  const [step, SetStep] = useState<number>(0);

  const navigate = useNavigate();

  const handleEditStudent = (id: string) => {
    console.log('chamou');
    const student = dados.filter((a: any) => a.id === id);
    setStudentEdit(student);
    SetStep(1);
  };

  const handleUploadStudent = () => {
    console.log('upload');
    const idEdit = Number(studentEdit[0].id);
    api()
      .put(`${import.meta.env.VITE_API_ROTA_URL}/students/${idEdit}`, {
        idEdit,
        newNome,
        newModalidade,
        newFaixa,
      })
      .then((res) => setDados(res.data))
      .catch((err) => console.log(err));
  };

  const handleDeleteStudent = () => {};

  const getDados = () => {
    api()
      .get(`${import.meta.env.VITE_API_ROTA_URL}/students`, {})
      .then((res) => setDados(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDados();

    console.log('studentedit', studentEdit);
    console.log('new', newNome, newModalidade, newFaixa);
  }, [setDados, SetStep, setStudentEdit, newNome, newModalidade, newFaixa]);

  return (
    <aside className="student">
      {step === 0 && (
        <>
          <h1>
            Gerenciar Alunos
            <MdSupervisedUserCircle />
          </h1>
          <form>
            <label htmlFor="">Nome:</label>
            <input type="text" placeholder="" />
            <label htmlFor="">Modalidade:</label>
            <input type="text" placeholder="" />
            <label htmlFor="">Faixa:</label>
            <input type="text" placeholder="" />
          </form>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Modalidade</th>
                <th>Faixa</th>
                <th>Situação</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {dados.map(
                ({ id, nome, modalidade, grau_faixa, situacao }: IStudent) => (
                  <tr key={id}>
                    <td>{nome}</td>
                    <td>{modalidade}</td>
                    <td>{grau_faixa}</td>
                    <td>{situacao}</td>
                    <td>
                      <Button
                        text={<MdEdit size={20} />}
                        handle={() => handleEditStudent(id)}
                        color="#222727"
                        bg="#c9c7c7"
                        size="42px"
                      />
                      <Button
                        text={<MdRestoreFromTrash size={20} />}
                        handle={() => handleDeleteStudent()}
                        color="#222727"
                        bg="#c9c7c7"
                        size="42px"
                      />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </>
      )}
      {step === 1 && (
        <div>
          <h1>
            Editar Aluno
            <MdDeblur />
          </h1>
          <aside className="edit">
            <div>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder={studentEdit[0].nome}
                onChange={(e) => setNewNome(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="modalidade">Modalidade:</label>
              <input
                type="text"
                id="modalidade"
                name="modalidade"
                placeholder={studentEdit[0].modalidade}
                onChange={(e) => setNewModalidade(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="nome">Grau da Faixa:</label>
              <input
                type="text"
                id="grau_faixa"
                name="grau_faixa"
                placeholder={studentEdit[0].grau_faixa}
                onChange={(e) => setNewFaixa(e.target.value)}
              />
            </div>
            <div className="group-buttons">
              <Button
                text="Editar"
                handle={() => handleUploadStudent()}
                bg="#222727"
                color="white"
                size="100px"
                font="18px"
              />
              <Button
                text="Voltar"
                handle={() => navigate(-1)}
                bg="white"
                color="#222727"
                size="100px"
                font="18px"
              />
            </div>
          </aside>
        </div>
      )}
      {step === 2 && (
        <div className="container-visualizar">
          <div className="visualizar-frame">
            <div className="cadastrar">
              <Button
                text="Cadastrar"
                handle={() => SubmitEvent}
                bg="white"
                color="#0f3002"
                size="100px"
              />
              <p>Pesquisar aluno</p>
            </div>
            <table>
              <tbody>
                <tr>
                  <td>NOME:</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>MODALIDADE:</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>FAIXA:</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <Button
                      text="Pesquisar"
                      handle={() => SetStep(0)}
                      bg="#a4a6a6"
                      color="#222727"
                      size="100px"
                    />
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
      )}
      {step === 2 && (
        <div className="cadastro-container">
          <div className="cadastro-frame">
            <form className="cadastro-form">
              <p className="cadastro-title">Cadastrar aluno</p>
              <div className="cadastro-group">
                <label htmlFor="nome" className="cadastro-label">
                  Nome:
                </label>
                <input type="text" id="nome" className="cadastro-input" />
              </div>
              <div className="cadastro-group">
                <label htmlFor="telefone" className="cadastro-label">
                  Telefone:
                </label>
                <input type="text" id="telefone" className="cadastro-input" />
              </div>
              <div className="cadastro-group">
                <label htmlFor="modalidade" className="cadastro-label">
                  Modalidade:
                </label>
                <input type="text" id="modalidade" className="cadastro-input" />
              </div>
              <div className="cadastro-group">
                <label htmlFor="faixa" className="cadastro-label">
                  Faixa:
                </label>
                <input type="text" id="faixa" className="cadastro-input" />
              </div>
              <div className="cadastro-group">
                <label htmlFor="dataNascimento" className="cadastro-label">
                  Data de Nascimento:
                </label>
                <input
                  type="date"
                  id="dataNascimento"
                  className="cadastro-input"
                />
              </div>
              <Button
                text="salvar"
                handle={() => SubmitEvent}
                bg="white"
                color="#0f3002"
                size="100px"
              />
            </form>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Student;
