const express = require("express");
const router = express.Router();
const { registerSiswa, loginSiswa } = require("../controllers/AuthController");

router.post("/register", registerSiswa);
router.post("/login", loginSiswa);

module.exports = router;
