import mysql from 'mysql2';
import { dbConfig } from './dbConfig';
import express from 'express';
import { IUser, IModality, IStudent } from './types';

export const con = mysql.createPool(dbConfig);

export const routes = express.Router();

async function getUsers(req?: any, res?: any) {
  const results = await con
    .promise()
    .query('SELECT * FROM users')
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  res.json(results);
}

async function getStudents(req?: any, res?: any) {
  const results = await con
    .promise()
    .query('SELECT * FROM student')
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  res.json(results);
}

async function getModality(req?: any, res?: any) {
  const results = await con
    .promise()
    .query('SELECT * FROM modality')
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  res.json(results);
}

async function addUser(req?: any, res?: any) {
  const { nome, email, senha } = req.body;
  const newUser: IUser = {
    nome,
    email,
    senha,
  };
  const results = await con
    .promise()
    .query('INSERT INTO users VALUES ?', newUser)
    .then(([rows, fields]) => {
      console.log('results ', rows);
      return rows;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  res.json(results);
}

async function addStudents(req?: any, res?: any) {
  // const { nome, modalidade, grau_faixa, situacao, dia_semana, horario } =
  //   req.body;
  // const newStudent: IStudent = {
  //   nome,
  //   modalidade,
  //   grau_faixa,
  //   situacao,
  //   dia_semana,
  //   horario,
  // };
  const results = await con
    .promise()
    .query(
      'INSERT INTO student (`id`, `nome`, `modalidade`, `grau_faixa`, `situacao`, `dia_semana`,   `horario`) VALUES ?',
      req.body
    )
    .then(([rows, fields]) => {
      console.log('results ', rows);
      return rows;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  res.json(results);
}

async function updateUsers(req?: any, res?: any) {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  const updateUser: IUser = {};
  if (nome) {
    updateUser.nome = nome;
  }
  if (email) {
    updateUser.email = email;
  }
  if (senha) {
    updateUser.senha = senha;
  }
  const results = await con
    .promise()
    .query('UPDATE users SET ? WHERE id = ?', [updateUser, id])
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  res.json(results);
}

async function updateStudents(req?: any, res?: any) {
  const { id } = req.params;
  const { nome, modalidade, grau_faixa, situacao, dia_semana, horario } =
    req.body;
  const updateStudent: IStudent = {};
  if (nome) {
    updateStudent.nome = nome;
  }
  if (modalidade) {
    updateStudent.modalidade = modalidade;
  }
  if (grau_faixa) {
    updateStudent.grau_faixa = grau_faixa;
  }
  if (situacao) {
    updateStudent.situacao = situacao;
  }
  if (dia_semana) {
    updateStudent.dia_semana = dia_semana;
  }
  if (horario) {
    updateStudent.horario = horario;
  }
  const results = await con
    .promise()
    .query('UPDATE student SET ? WHERE id = ?', [updateStudent, id])
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  res.json(results);
}

export {
  getUsers,
  getModality,
  getStudents,
  addUser,
  addStudents,
  updateUsers,
  updateStudents,
};
