const express = require("express");
const router = express.Router();
const {
  getUsersModalidade,
  getModalidadeByUserId,
  addUserModalidade,
  updateUserModalidade,
} = require("../usuariosModalidadeController/index");

router.get("/usersModalidade", getUsersModalidade);
router.get("/usersModalidade/:id", getModalidadeByUserId);
router.post("/usersModalidade", addUserModalidade);
router.put("/usersModalidade/:id", updateUserModalidade);

module.exports = router;
