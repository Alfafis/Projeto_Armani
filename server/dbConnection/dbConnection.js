// dbConnection.js

const mysql = require("mysql");

function SQLQuery(sqlqry, params, callback) {
  const dbConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "teamarmanni",
  });

  dbConnection.query(sqlqry, params, (error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
}

module.exports = SQLQuery;
