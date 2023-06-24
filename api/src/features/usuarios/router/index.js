const express = require("express");
const router = express.Router();
const {
  getUsers,
  addUser,
  updateUser,
} = require("../usuariosController/index");

router.get("/users", getUsers);
router.post("/users", addUser);
router.put("/users/:id", updateUser);

module.exports = router;
