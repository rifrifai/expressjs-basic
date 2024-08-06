const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.send("This is Register Route");
});

module.exports = router;
