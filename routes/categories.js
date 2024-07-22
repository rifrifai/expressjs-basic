const express = require("express");
const router = express.Router();

// routing
// endpoint bisa sama, asalkan method nya berbeda
router.get("/", (req, res) => {
  res.send("Hello World GET");
});

router.post("/", (req, res) => {
  res.send("Response From POST");
});

// kalau ada tambahan di letakan di atas :nama
router.get("/filterData", (req, res) => {
  res.send("Route Filter Data");
});

router.get("/:nama", (req, res) => {
  res.send(`Endpoint from route params ${req.params.nama}`);
});

module.exports = router;
