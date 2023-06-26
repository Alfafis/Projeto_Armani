const express = require("express");

export const routes = express.Router();

const {
  getUsers,
  getUserById,
  addUser,
  updateUser,
} = require("../usuariosController/index");

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", addUser);
router.put("/users/:id", updateUser);
