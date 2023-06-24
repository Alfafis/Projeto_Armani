const { dbConnection } = require("../../../../dbConnection/dbConnection");

const getUsersRepository = async () => {
  return new Promise((resolve, reject) => {
    dbConnection.query(`SELECT * from usuarios;`, (error, results, fields) => {
      if (error) {
        console.error("Erro ao executar a consulta:", error);
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};

const addUserRepository = async ({
  nome_aluno,
  data_nascimento,
  telefone,
  email,
  tipousuarios_id,
  senha,
}) => {
  const newUser = {
    nome_aluno,
    data_nascimento,
    telefone,
    email,
    status_aluno: 1,
    tipousuarios_id,
    senha,
  };
  return new Promise((resolve, reject) => {
    dbConnection.query(
      "INSERT INTO usuarios SET ?",
      newUser,
      (error, results, fields) => {
        if (error) {
          console.error("Erro ao inserir os dados:", error);
          reject(error);
          return;
        }

        resolve({ message: "Novo usuário criado com sucesso!" });
      }
    );
  });
};

const updateUserRepository = async ({
  id,
  nome_aluno,
  data_nascimento,
  telefone,
  status_aluno,
  email,
  tipousuarios_id,
  senha,
}) => {
  const updateUser = {};
  if (nome_aluno) {
    updateUser.nome_aluno = nome_aluno;
  }
  if (data_nascimento) {
    updateUser.data_nascimento = data_nascimento;
  }
  if (telefone) {
    updateUser.telefone = telefone;
  }
  if(status_aluno){
    updateUser.status_aluno = status_aluno;
  }else{
    updateUser.status_aluno = 0;
  }
  if (email) {
    updateUser.email = email;
  }
  if (tipousuarios_id) {
    updateUser.tipousuarios_id = tipousuarios_id;
  }
  if (senha) {
    updateUser.senha = senha;
  }

  return new Promise((resolve, reject) => {
    dbConnection.query(
      "UPDATE usuarios SET ? WHERE id = ?",
      [updateUser, id],
      (error, results, fields) => {
        if (error) {
          console.error("Erro ao editar os dados do usuario: ", error);
          reject(error);
          return;
        }

        resolve({ message: "Usuário editado com sucesso!" });
      }
    );
  });
};

module.exports = {
  getUsersRepository,
  addUserRepository,
  updateUserRepository,
};
