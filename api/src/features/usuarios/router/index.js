const express = require("express");
const router = express.Router();
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

module.exports = router;
