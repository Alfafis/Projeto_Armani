const { getModalidadesRepository } = require("../modalidadesRepository/index");

const getModalidadesDomain = async () => {
  const modalidades = await getModalidadesRepository();
  return modalidades;
};

module.exports = {
  getModalidadesDomain,
};
