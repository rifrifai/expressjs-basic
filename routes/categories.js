const express = require("express");
const router = express.Router();

// routing
// endpoint bisa sama, asalkan method nya berbeda
// /api/v1/categories
router.get("/", (req, res) => {
  res.json({
    message: "Hello World GET",
    data: [
      {
        id: 1,
        name: "IPhone",
      },
      {
        id: 2,
        name: "Samsung",
      },
    ],
  });
});

router.post("/", (req, res) => {
  res.send("Response From POST");
});

// kalau ada tambahan di letakan di atas :nama
// /api/v1/categories/filterData
router.get("/filterData", (req, res) => {
  res.send("Route Filter Data");
});

// /api/v1/categories/:nama
router.get("/:nama", (req, res) => {
  res.send(`Endpoint from route params ${req.params.nama}`);
});

module.exports = router;
