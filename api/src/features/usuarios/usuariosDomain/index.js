const {
  getUsersRepository,
  addUserRepository,
  updateUserRepository,
  getUserByIdRepository,
} = require("../usuariosRepository");

const getUsersDomain = async () => {
  const users = await getUsersRepository();
  return users;
};

const getUserByIdDomain = async (id) => {
  const user = await getUserByIdRepository(id);
  return user;
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
  getUserByIdDomain,
  addUserDomain,
  updateUserDomain,
};
