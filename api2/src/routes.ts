import mysql, { createPool } from 'mysql2';
import { dbConfig } from './dbConfig';
import { app } from './server';
import express from 'express';

export const con = mysql.createPool(dbConfig);

export const routes = express.Router();

async function getUsers(req?: any, res?: any) {
  const results = await con
    .promise()
    .query('SELECT * FROM usuarios')
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

async function getModality(req?: any, res?: any) {
  const results = await con
    .promise()
    .query('SELECT * FROM modalidade')
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

async function getUsersById(req?: any, res?: any) {
  const { id } = req.params;
  const results = await con
    .promise()
    .query(`SELECT * FROM usuarios WHERE id = ?`, id)
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

async function addUser(req?: any, res?: any) {
  const {
    nome_aluno,
    data_nascimento,
    telefone,
    email,
    tipousuarios_id,
    senha,
  } = req.body;
  const newUser = {
    nome_aluno,
    data_nascimento,
    telefone,
    email,
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
  const update = {
    id,
    nome_aluno,
    data_nascimento,
    telefone,
    status_aluno,
    email,
    tipousuarios_id,
    senha,
  };
  const results = await con
    .promise()
    .query(`UPDATE usuarios SET ? WHERE id = ?`, [update, id])
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

export { getUsers, getUsersById, addUser, updateUser, getModality };
