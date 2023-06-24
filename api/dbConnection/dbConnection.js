const { logger } = require("../shared/log/logger");
const mysql = require("mysql2");
const dotenv = require('dotenv').config()

const dbConfig = {
  host: process.env.API_RAILWAY_HOST,
  user: process.env.API_RAILWAY_USER,
  password: process.env.API_RAILWAY_PASSWORD,
  database: process.env.API_RAILWAY_DATABASE,
  port: process.env.API_RAILWAY_PORT,
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
