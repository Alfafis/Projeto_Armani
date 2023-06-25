const {
  errorResponse,
  response,
  successResponse,
} = require("../../../../shared/common/responses/responses");
const {
  getUsersModalidadeDomain,
  getModalidadeByUserIdDomain,
  addUserModalidadeDomain,
  updateUserModalidadeDomain,
} = require("../usuariosModalidadeDomain/index");

exports.getUsersModalidade = async (req, res) => {
  try {
    const users = await getUsersModalidadeDomain();
    return response(res, users);
  } catch (error) {
    logger.error(error);
    return errorResponse(res, error);
  }
};
exports.getModalidadeByUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getModalidadeByUserIdDomain(id);
    return response(res, user);
  } catch (error) {
    logger.error(error);
    return errorResponse(res, error);
  }
};
exports.addUserModalidade = async (req, res) => {
  const { usuario_id, modalidade_id, grau_faixa, valor_modalidade } = req.body;

  try {
    const estatus = await addUserModalidadeDomain({
      usuario_id,
      modalidade_id,
      grau_faixa,
      valor_modalidade,
    });
    return successResponse(res, estatus.message);
  } catch (error) {
    logger.error(error);
    return errorResponse(res, error);
  }
};

exports.updateUserModalidade = async (req, res) => {
  const { id } = req.params;
  const { grau_faixa, ativo } = req.body;

  try {
    const status = await updateUserModalidadeDomain({
      id,
      grau_faixa,
      ativo,
    });
    return successResponse(res, status.message);
  } catch (error) {
    logger.error(error);
    return errorResponse(res, error);
  }
};
