const {
  errorResponse,
  response,
} = require("../../../../shared/common/responses/responses");
const { getModalidadesDomain } = require("../modalidadesDomain");

exports.getModalidades = async (req, res) => {
  try {
    const modalidades = await getModalidadesDomain();
    return response(res, modalidades);
  } catch (error) {
    logger.error(error);
    return errorResponse(res, error);
  }
};
