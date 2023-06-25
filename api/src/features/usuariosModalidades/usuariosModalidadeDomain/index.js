const {
  getUsersModalidadeRepository,
  getModalidadeByUserIdRepository,
  addUserModalidadeRepository,
  updateUserModalidadeRepository,
  
} = require("../usuariosModalidadeRepository");

const getUsersModalidadeDomain = async () => {
  const users = await getUsersModalidadeRepository();
  return users;
};

const getModalidadeByUserIdDomain = async (id) => {
  const user = await getModalidadeByUserIdRepository(id);
  return user;
};

const addUserModalidadeDomain = async ({
  usuario_id,
    modalidade_id,
    grau_faixa,
    valor_modalidade
}) => {
  const status = await addUserModalidadeRepository({
    usuario_id,
    modalidade_id,
    grau_faixa,
    valor_modalidade
  });
  return status;
};

const updateUserModalidadeDomain = async ({
  id,
  grau_faixa,
  ativo,
}) => {
  const status = await updateUserModalidadeRepository({
    id,
    grau_faixa,
    ativo,
  });
  return status;
};

module.exports = {
  getUsersModalidadeDomain,
  getModalidadeByUserIdDomain,
  addUserModalidadeDomain,
  updateUserModalidadeDomain,
};
