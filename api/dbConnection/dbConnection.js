const { logger } = require("../shared/log/logger");
const mysql = require("mysql");


const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "teamarmanni",
}
 
 const dbConnection = mysql.createConnection(dbConfig);

 const callBackConnectionDb = (error) => {
  if (error) {
   logger.error('Erro ao conectar ao banco de dados:', error);
    return;
  }
  
}
dbConnection.connect(callBackConnectionDb)

 module.exports = {

  dbConnection
 }
