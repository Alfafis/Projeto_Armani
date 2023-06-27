import mysql from 'mysql2';
import { dbConfig } from './dbConfig';
import express from 'express';
import { IUser, IModality } from './types';

export const con = mysql.createPool(dbConfig);

export const routes = express.Router();

async function getUsers(req?: any, res?: any) {
  const results = await con
    .promise()
    .query('SELECT * FROM usuarios')
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
    .query('SELECT * FROM modalidade')
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  res.json(results);
}
async function getUsersModality(req?: any, res?: any) {
  const results = await con
    .promise()
    .query('SELECT * FROM modalidadeusuario')
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  res.json(results);
}

async function getUsersById(req?: any, res?: any) {
  const { id } = req.params;
  const results = await con
    .promise()
    .query(`SELECT * FROM usuarios WHERE id = ?`, id)
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  res.json(results);
}

async function getModalityUserId(req?: any, res?: any) {
  const { id } = req.params;
  const results = await con
    .promise()
    .query(`SELECT * FROM usuarios WHERE id = ?`, id)
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
  const {
    nome_aluno,
    data_nascimento,
    telefone,
    email,
    tipousuarios_id,
    senha,
  } = req.body;
  const newUser: IUser = {
    nome_aluno,
    data_nascimento,
    telefone,
    email,
    status_aluno: '1',
    tipousuarios_id,
    senha,
  };
  const results = await con
    .promise()
    .query(`INSERT INTO usuarios SET ?`, newUser)
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

async function addUserModality(req?: any, res?: any) {
  const { usuario_id, modalidade_id, grau_faixa, valor_modalidade } = req.body;
  const newUserModality: IModality = {
    usuario_id,
    modalidade_id,
    grau_faixa,
    valor_modalidade,
  };
  const results = await con
    .promise()
    .query(`INSERT INTO usuarios SET ?`, newUserModality)
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

async function updateUser(req?: any, res?: any) {
  const { id } = req.params;
  const {
    nome_aluno,
    data_nascimento,
    telefone,
    status_aluno,
    email,
    tipousuarios_id,
    senha,
  } = req.body;
  const updateUser: IUser = {};
  if (nome_aluno) {
    updateUser.nome_aluno = nome_aluno;
  }
  if (data_nascimento) {
    updateUser.data_nascimento = data_nascimento;
  }
  if (telefone) {
    updateUser.telefone = telefone;
  }
  if (status_aluno) {
    updateUser.status_aluno = status_aluno;
  } else {
    updateUser.status_aluno = '0';
  }
  if (email) {
    updateUser.email = email;
  }
  if (tipousuarios_id) {
    updateUser.tipousuarios_id = tipousuarios_id;
  }
  if (senha) {
    updateUser.senha = senha;
  }
  const results = await con
    .promise()
    .query(`UPDATE usuarios SET ? WHERE id = ?`, [updateUser, id])
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  res.json(results);
}

async function updateUserModality(req?: any, res?: any) {
  const { id } = req.params;
  const { grau_faixa, ativo } = req.body;
  const updateUserModality: IModality = {};
  if (grau_faixa) {
    updateUserModality.grau_faixa = grau_faixa;
  }
  if (ativo) {
    updateUserModality.ativo = ativo;
  } else {
    updateUserModality.ativo = '0';
  }

  const results = await con
    .promise()
    .query(`UPDATE usuarios SET ? WHERE id = ?`, [updateUserModality, id])
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
  getUsersById,
  getUsersModality,
  getModalityUserId,
  addUser,
  addUserModality,
  updateUser,
  updateUserModality,
};
