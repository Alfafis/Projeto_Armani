const {
  getUsersRepository,
  addUserRepository,
  updateUserRepository,
} = require("../usuariosRepository");
const getUsersDomain = async () => {
  const users = await getUsersRepository();
  return users;
};

const addUserDomain = async ({
  nome_aluno,
  data_nascimento,
  telefone,
  email,
  tipousuarios_id,
  senha,
}) => {
  const status = await addUserRepository({
    nome_aluno,
    data_nascimento,
    telefone,
    email,
    tipousuarios_id,
    senha,
  });
  return status;
};

const updateUserDomain = async ({
  id,
  nome_aluno,
  data_nascimento,
  telefone,
  status_aluno,
  email,
  tipousuarios_id,
  senha,
}) => {
  const status = await updateUserRepository({
    id,
    nome_aluno,
    data_nascimento,
    telefone,
    status_aluno,
    email,
    tipousuarios_id,
    senha,
  });
  return status;
};

module.exports = {
  getUsersDomain,
  addUserDomain,
  updateUserDomain,
};
