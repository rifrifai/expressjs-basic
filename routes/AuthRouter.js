const express = require("express");
const router = express.Router();
const { registerSiswa } = require("../controllers/AuthController");

router.post("/register", registerSiswa);

module.exports = router;
