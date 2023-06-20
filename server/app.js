const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const SQLQuery = require("./dbConnection/dbConnection");
const loginRouter = require("./routes/login"); //login
const path = require("path"); //login
const passport = require("passport"); //login
const session = require("express-session"); //login

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//login
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const port = 3000;
app.set("port", port);
const server = http.createServer(app);
server.listen(port);
console.log("API rodando na porta " + port);

//--------------------
// Rota de login
// Configuração do Passport
require("./auth")(passport);
app.use(
  session({
    secret: "123",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 60 * 1000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());
// Configuração das views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Rota de login
app.use("/login", loginRouter);
// Middleware de autenticação
function authenticationMiddleware(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login?fail=true");
}

//----------------------------------------

app.get("/", (req, res) => {
  console.log("teste");
  res.status(200).send("Hello, world!");
});

// Consultar todos os alunos
app.get("/alunos", (req, res) => {
  SQLQuery("SELECT * FROM aluno", null, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Erro ao consultar os alunos.");
    } else {
      res.status(200).json(results);
    }
  });
});

// Pesquisar o aluno pelo ID
app.get("/alunos/id/:id?", (req, res) => {
  let filter = "";
  if (req.params.id) filter = " WHERE ID=" + parseInt(req.params.id);
  SQLQuery("SELECT * FROM aluno" + filter, null, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Erro ao pesquisar o aluno pelo ID.");
    } else {
      res.status(200).json(results);
    }
  });
});

// Pesquisar o aluno pelo nome
app.get("/alunos/nome/:nome_aluno?", (req, res) => {
  let filter = "";
  if (req.params.nome_aluno) {
    filter = " WHERE nome_aluno LIKE '%" + req.params.nome_aluno + "%'";
  }
  SQLQuery("SELECT * FROM aluno" + filter, null, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Erro ao pesquisar o aluno pelo nome.");
    } else {
      if (results.length === 0) {
        res.status(404).send("Aluno não encontrado.");
      } else {
        res.status(200).json(results);
      }
    }
  });
});

// Atualizar aluno
app.put("/updateAluno/:id", (req, res) => {
  const alunoId = parseInt(req.params.id);
  const updateData = req.body;
  SQLQuery(
    "UPDATE aluno SET ? WHERE id = ?",
    [updateData, alunoId],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send("Erro ao atualizar o aluno.");
      } else {
        res.status(200).send("Aluno editado com sucesso!");
      }
    }
  );
});

// Excluir aluno pelo ID
app.delete("/deleteAluno/:id", (req, res) => {
  const alunoId = parseInt(req.params.id);
  SQLQuery("DELETE FROM aluno WHERE id = ?", [alunoId], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Erro ao excluir o aluno.");
    } else {
      res.status(200).send("Aluno excluído com sucesso!");
    }
  });
});

//Cadastrar novo aluno
app.post("/alunos/cadastrarAluno", (req, res) => {
  const {
    nome_aluno,
    modalidade,
    data_nascimento,
    telefone,
    faixa,
    status_aluno,
  } = req.body;
  const sql = `INSERT INTO aluno (nome_aluno, modalidade, data_nascimento, telefone, faixa, status_aluno)
               VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [
    nome_aluno,
    modalidade,
    data_nascimento,
    telefone,
    faixa,
    status_aluno,
  ];

  SQLQuery(sql, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Erro ao cadastrar o aluno.");
    } else {
      if (results.affectedRows > 0) {
        res.status(200).send("Aluno cadastrado com sucesso!");
      }
    }
  });
});
