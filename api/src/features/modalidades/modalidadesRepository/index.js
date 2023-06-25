const { dbConnection } = require("../../../../dbConnection/dbConnection");

const getModalidadesRepository = async () => {
  return new Promise((resolve, reject) => {
    dbConnection.query(`SELECT * from modalidade;`, (error, results, fields) => {
      if (error) {
        console.error("Erro ao executar a consulta:", error);
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};

module.exports = {
  getModalidadesRepository,
};
