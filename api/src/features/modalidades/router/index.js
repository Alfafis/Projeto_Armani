const express = require("express");
const router = express.Router();
const {
    getModalidades
} = require("../modalidadesController/index");

router.get("/modalidades", getModalidades);


module.exports = router;