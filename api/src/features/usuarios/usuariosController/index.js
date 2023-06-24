const {
  errorResponse,
  response,
  successResponse,
} = require("../../../../shared/common/responses/responses");
const {
  getUsersDomain,
  addUserDomain,
  updateUserDomain,
} = require("../usuariosDomain");

exports.getUsers = async (req, res) => {
  try {
    const users = await getUsersDomain();
    return response(res, users);
  } catch (error) {
    logger.error(error);
    return errorResponse(res, error);
  }
};

exports.addUser = async (req, res) => {
  const {
    nome_aluno,
    data_nascimento,
    telefone,
    email,
    tipousuarios_id,
    senha,
  } = req.body;

  try {
    const estatus = await addUserDomain({
      nome_aluno,
      data_nascimento,
      telefone,
      email,
      tipousuarios_id,
      senha,
    });
    return successResponse(res, estatus.message);
  } catch (error) {
    logger.error(error);
    return errorResponse(res, error);
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    nome_aluno,
    data_nascimento,
    telefone,
    status_aluno,
    email,
    tipousuarios_id,
    senha,
  } = req.body;

  try {
   const status = await updateUserDomain({
      id,
      nome_aluno,
      data_nascimento,
      telefone,
      status_aluno,
      email,
      tipousuarios_id,
      senha,
    });
    return successResponse(res, status.message);
  } catch (error) {
    logger.error(error);
    return errorResponse(res, error);
  }
};
