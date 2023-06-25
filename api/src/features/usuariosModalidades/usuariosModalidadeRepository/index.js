const { dbConnection } = require("../../../../dbConnection/dbConnection");

const getUsersModalidadeRepository = async () => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT * from modalidadeusuario;`,
      (error, results, fields) => {
        if (error) {
          console.error("Erro ao executar a consulta:", error);
          reject(error);
          return;
        }
        resolve(results);
      }
    );
  });
};

const getModalidadeByUserIdRepository = async (id) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT M.nome as Modalidade,MU.valor_modalidade as Valor, U.nome_aluno as Aluno, MU.grau_faixa as GrauFaixa, MU.ativo from modalidadeusuario AS MU
    INNER JOIN modalidade AS M ON M.id = MU.modalidade_id
    INNER JOIN usuarios AS U ON U.id = MU.usuario_id
    where usuario_id =  ?`,
      id,
      (error, results, fields) => {
        if (error) {
          console.error("Erro ao executar a consulta:", error);
          reject(error);
          return;
        }
        resolve(results);
      }
    );
  });
};

const addUserModalidadeRepository = async ({
  usuario_id,
  modalidade_id,
  grau_faixa,
  valor_modalidade,
}) => {
  const newUsuarioModalidade = {
    usuario_id,
    modalidade_id,
    grau_faixa,
    valor_modalidade,
  };
  return new Promise((resolve, reject) => {
    dbConnection.query(
      "INSERT INTO modalidadeusuario SET ?",
      newUsuarioModalidade,
      (error, results, fields) => {
        if (error) {
          console.error("Erro ao inserir os dados:", error);
          reject(error);
          return;
        }

        resolve({
          message: "Associação entre usuário e modalidade criado com sucesso!",
        });
      }
    );
  });
};

const updateUserModalidadeRepository = async ({
  id,
  grau_faixa,
      ativo,
}) => {
  const updateUser = {};
  if (grau_faixa) {
    updateUser.grau_faixa = grau_faixa;
  }
 
  if (ativo) {
    updateUser.ativo = ativo;
  } else {
    updateUser.ativo = 0;
  }

  return new Promise((resolve, reject) => {
    dbConnection.query(
      "UPDATE modalidadeusuario SET ? WHERE id = ?",
      [updateUser, id],
      (error, results, fields) => {
        if (error) {
          console.error("Erro ao editar os dados do usuario: ", error);
          reject(error);
          return;
        }

        resolve({ message: "Modalidade de usuário editado com sucesso!" });
      }
    );
  });
};

module.exports = {
  getUsersModalidadeRepository,
  getModalidadeByUserIdRepository,
  addUserModalidadeRepository,
  updateUserModalidadeRepository,
};
