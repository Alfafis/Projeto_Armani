"use strict";

const app = require("./app");
const https = require("https");
var cors = require('cors')
const fs = require("fs");
const debug = require("debug")("nodestr:server");

app.use(cors())

const port = normalizePort(process.env.CLI_RAILWAY_PORT || "3000");
app.set("port", port);

const options = {
  key: fs.readFileSync("./certificate/chave-privada.pem"), // Caminho para o arquivo da chave privada
  cert: fs.readFileSync("./certificate/certificado.pem"), // Caminho para o arquivo do certificado
};

const server = https.createServer(options, app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
console.log("API rodando na porta " + port);

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe" + port : "Port" + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + "requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + "is already in use");
      process.exit(1);
      break;
    default:
      throw error;
      break;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe" + addr : "port " + addr.port;
  debug("Listening on " + bind);
}